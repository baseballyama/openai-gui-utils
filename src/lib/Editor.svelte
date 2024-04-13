<script context="module" lang="ts">
	import { EditorView, minimalSetup, basicSetup } from 'codemirror';
	import type { Transaction } from '@codemirror/state';
	import { python } from '@codemirror/lang-python';
	import { initEditorView } from './editor.helper';
	export { minimalSetup, basicSetup };
</script>

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	type Props = {
		view?: EditorView;
		doc: string;
		verbose?: boolean;
		onUpdate?: (tr: Transaction) => void;
		onChange?: (editor: EditorView, tr: Transaction) => void;
	};

	const extensions = [basicSetup, python()];

	let { view, doc, verbose = false, onUpdate = () => {}, onChange = () => {} }: Props = $props();

	let dom: HTMLDivElement;
	let mounted = $state(false);

	const editorTxHandler = (tr: Transaction, editor: EditorView) => {
		editor.update([tr]);
		if (verbose) onUpdate(tr);
		onChange(editor, tr);
	};

	$effect(() => {
		if (mounted && doc != undefined) {
			if (view == null) {
				view = initEditorView(doc, extensions, dom, editorTxHandler);
			}
		}
	});

	onMount(() => {
		mounted = true;
		return () => {
			mounted = false;
		};
	});

	onDestroy(() => view?.destroy());
</script>

<div class="codemirror" bind:this={dom}></div>

<style>
	.codemirror {
		display: contents;
	}
</style>
