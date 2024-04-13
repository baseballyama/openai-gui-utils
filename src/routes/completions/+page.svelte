<script lang="ts">
	import type { EditorView } from 'codemirror';
	import type { Transaction } from '@codemirror/state';
	import Editor from '$lib/Editor.svelte';
	import Chat from '$lib/Chat.svelte';
	let messages = $state(
		JSON.stringify(
			[
				{
					role: 'system',
					content: 'You are call center assistant.'
				},
				{ role: 'user', content: 'Hi!' },
				{ role: 'assistant', content: 'Thank you for calling. May I help you?' },
				{ role: 'user', content: 'Please tell me how to fix xxx?' }
			],
			null,
			2
		)
	);
	let response = $state(
		JSON.stringify(
			{
				id: 'chatcmpl-xxx',
				model: 'gpt-35-turbo',
				usage: { total_tokens: 100, prompt_tokens: 100, completion_tokens: 3 },
				object: 'chat.completion',
				choices: [
					{
						index: 0,
						message: { role: 'assistant', content: 'You can do xxx!' },
						finish_reason: 'stop',
						content_filter_results: {
							hate: { filtered: false, severity: 'safe' },
							sexual: { filtered: false, severity: 'safe' },
							violence: { filtered: false, severity: 'safe' },
							self_harm: { filtered: false, severity: 'safe' }
						}
					}
				],
				created: 1693666251,
				prompt_annotations: [
					{
						prompt_index: 0,
						content_filter_results: {
							hate: { filtered: false, severity: 'safe' },
							sexual: { filtered: false, severity: 'safe' },
							violence: { filtered: false, severity: 'safe' },
							self_harm: { filtered: false, severity: 'safe' }
						}
					}
				]
			},
			null,
			2
		)
	);

	let chat = $derived.by(() => {
		const res = JSON.parse(response);
		const getMessage = () => {
			const { choices } = res;
			if (!choices || choices.length === 0) return undefined;
			const { message } = choices[0];
			return message;
		};
		const parsed = JSON.parse(messages);

		return [...(Array.isArray(parsed) ? parsed : []), getMessage()].filter(Boolean) as InstanceType<
			typeof Chat
		>['messages'];
	});

	const changeHandler = (
		editor: EditorView,
		tr: Transaction,
		original: string,
		setUpdated: (updated: string) => void
	) => {
		try {
			const parsed = JSON.parse(tr.state.doc.toString());
			const newMessages = JSON.stringify(parsed, null, 2);
			if (newMessages !== original) {
				const newPosition = tr.state.selection.ranges[0].from;
				setUpdated(newMessages);
				editor.dispatch({
					changes: {
						from: 0,
						to: editor.state.doc.length,
						insert: newMessages
					}
				});
				editor.dispatch({
					selection: {
						anchor: newPosition,
						head: newPosition
					}
				});
			}
		} catch (e) {
			/* do nothing */
		}
	};

	const changeHandlerMessage = (editor: EditorView, tr: Transaction) => {
		changeHandler(editor, tr, messages, (updated) => {
			messages = updated;
		});
	};

	const changeHandlerResponse = (editor: EditorView, tr: Transaction) => {
		changeHandler(editor, tr, response, (updated) => {
			response = updated;
		});
	};
</script>

<div class="wrapper">
	<div class="content">
		<section class="editors">
			<div class="editor-wrapper">
				<div>
					<div>
						<h2>Messages</h2>
						<div class="editor">
							<Editor doc={messages} onChange={changeHandlerMessage}></Editor>
						</div>
					</div>
					<div>
						<h2>Response</h2>
						<div class="editor">
							<Editor doc={response} onChange={changeHandlerResponse}></Editor>
						</div>
					</div>
				</div>
			</div>
			<div class="arrow arrow-pc">→</div>
			<div class="arrow arrow-sp">↓</div>
			<div class="editor-wrapper chat-wrapper">
				<Chat messages={chat} />
			</div>
		</section>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	h2 {
		margin: 0;
		padding: 8px 0;
	}

	.wrapper {
		margin: 0;
		display: flex;
		flex-direction: column;
	}

	.content {
		flex: 1 0 auto;
	}

	.editors {
		display: flex;
	}

	.editors > * {
		display: flex;
		align-items: top;
	}

	.editors > .arrow {
		font-size: 24px;
		font-weight: 900;
	}

	.editors > .arrow-pc {
		height: 100%;
		margin: auto 8px;
	}

	.editors > .arrow-sp {
		margin: 8px auto;
	}

	.editors > .editor-wrapper {
		flex: 1;
		margin: 8px;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 8px;
		max-width: calc(50vw - 72px);
	}

	.editors > .editor-wrapper > div {
		width: 100%;
	}

	.editor {
		max-height: calc(50vh - 144px);
		overflow: auto;
	}

	.chat-wrapper {
		max-height: calc(100vh - 184px);
		overflow: auto;
	}

	@media (max-width: 767px) {
		.editors {
			flex-direction: column;
		}
		.arrow-pc {
			display: none;
		}
	}

	@media (min-width: 768px) {
		.editors {
			flex-direction: row;
		}
		.arrow-sp {
			display: none;
		}
	}
</style>
