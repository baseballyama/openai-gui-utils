<script lang="ts">
	import { browser } from '$app/environment';
	type EmbeddingPair = {
		a: string;
		aVector: number[];
		b: string;
		bVector: number[];
		similarity: number;
	};

	let openaiApiKey = '';
	if (browser) {
		openaiApiKey = sessionStorage.getItem('openaiApiKey') || '';
	}
	let openaiApiKeyInputError = '';
	const embeddingHistories: Record<string, number[]> = {};

	let taskTotal = 0;
	let taskCompleted = 0;

	let rows: EmbeddingPair[] = [
		{
			a: '',
			aVector: [],
			b: '',
			bVector: [],
			similarity: 0
		}
	];

	const addRow = () => {
		rows = [
			...rows,
			{
				a: '',
				aVector: [],
				b: '',
				bVector: [],
				similarity: 0
			}
		];
	};

	const deleteItem = (i: number) => {
		rows = rows.filter((_, index) => index !== i);
	};

	const embedding = async (text: string): Promise<number[]> => {
		if (embeddingHistories[text]) {
			return embeddingHistories[text];
		}
		const result = await fetch('https://api.openai.com/v1/embeddings', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${openaiApiKey}`
			},
			body: JSON.stringify({
				input: text,
				model: 'text-embedding-3-small'
			})
		});
		const body = await result.json();
		const embedding = body.data[0].embedding;
		embeddingHistories[text] = embedding;
		return embedding;
	};

	const cosineSimilarity = (a: number[], b: number[]) => {
		const dotProduct = (a: number[], b: number[]) => {
			let product = 0;
			for (let i = 0; i < a.length; i++) {
				product += a[i] * b[i];
			}
			return product;
		};

		const magnitude = (vec: number[]) => {
			let sum = 0;
			for (let i = 0; i < vec.length; i++) {
				sum += vec[i] * vec[i];
			}
			return Math.sqrt(sum);
		};

		return dotProduct(a, b) / (magnitude(a) * magnitude(b));
	};

	const execute = async () => {
		taskTotal = rows.length;
		taskCompleted = 0;
		openaiApiKeyInputError = '';
		if (openaiApiKey === '') {
			openaiApiKeyInputError = 'Please input your OpenAI API key';
			return;
		}
		sessionStorage.setItem('openaiApiKey', openaiApiKey);

		rows.flatMap(async (row) => {
			const [a, b] = await Promise.all([embedding(row.a), embedding(row.b)]);
			taskCompleted += 1;
			const similarity = cosineSimilarity(a, b);
			row.aVector = a;
			row.bVector = b;
			row.similarity = similarity;
			rows = [...rows];
		});
	};
</script>

<p class="openai-api-key">OpenAI API key</p>
<input placeholder="OpenAI API key" class="api-input" bind:value={openaiApiKey} />
<p class="input-error">{openaiApiKeyInputError}</p>

<ul>
	<li>Sentence1</li>
	<li>Sentence2</li>
	<li>Cosine Similarity</li>
	<li>Delete</li>
</ul>
{#each rows as row, i}
	<ul>
		<li>
			<textarea placeholder="Input your sentence" bind:value={row.a} />
			{#if row.aVector.length > 0}
				<textarea
					class="vector"
					value={`[${row.aVector.length > 0 && row.aVector.join(', ')}]<`}
					readonly
				/>
			{/if}
		</li>
		<li>
			<textarea placeholder="Input your sentence" bind:value={row.b} />
			{#if row.bVector.length > 0}
				<textarea
					class="vector"
					value={`[${row.bVector.length > 0 && row.bVector.join(', ')}]<`}
					readonly
				/>
			{/if}
		</li>
		<li>{row.similarity === 0 ? '(Not Embedded)' : row.similarity.toFixed(6)}</li>
		<li><button on:click={() => deleteItem(i)}>Delete</button></li>
	</ul>
{/each}

<div class="buttons">
	<button on:click={addRow}>+ Add</button>
	<button class="execute-button" on:click={execute}>Embeddings</button>
</div>

{#if taskTotal > 0}
	<p class="progress">{taskCompleted}/{taskTotal} tasks completed</p>
{/if}

<style>
	.openai-api-key {
		margin: 16px 0 0 16px;
	}
	.api-input {
		width: 80%;
		margin: 8px 16px 4px 16px;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.progress {
		display: flex;
		justify-content: flex-end;
		margin: 16px;
	}

	.input-error {
		color: red;
		margin: 0 16px;
		margin-bottom: 32px;
	}

	ul {
		list-style: none;
		padding: 0;
		display: flex;
		margin: 0;
	}

	ul:nth-child(1) {
		border-bottom: 1px solid #ccc;
	}

	ul:nth-child(1) > li {
		text-align: center;
	}

	li {
		text-align: center;
		padding: 0 16px;
	}

	li + li {
		border-left: 1px solid #ccc;
	}

	ul > li:nth-child(1),
	ul > li:nth-child(2) {
		flex-grow: 1;
	}

	ul > li:nth-child(3),
	ul > li:nth-child(4) {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	ul > li:nth-child(3) {
		width: 200px;
	}

	ul > li:nth-child(4) {
		width: 120px;
	}

	.vector {
		font-size: 12px;
		height: 64px;
		width: 100%;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	textarea:not(.vector) {
		width: 100%;
		margin: 16px 0;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.buttons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 24px;
	}

	button {
		margin: 0 16px;
		padding: 8px 16px;
		border: none;
		border-radius: 4px;
		background-color: #f0f0f0;
		cursor: pointer;
	}

	.execute-button {
		padding: 8px 16px;
		border: none;
		border-radius: 4px;
		background-color: #d43109;
		color: white;
		font-size: 16px;
		cursor: pointer;
		text-decoration: none;
	}

	.execute-button:hover {
		background-color: #ff5a1f;
	}
</style>
