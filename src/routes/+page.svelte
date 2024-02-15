<div class="top-page">
	<p>
		This site contains small utilities that are frequently used when developing products using
		OpenAI.
	</p>
	<p>I'm using them in my daily work.</p>

	<div class="buttons">
		<a href="/completions">Completion API Visualizer</a>
		<a href="/embeddings">Embeddings and Cosine Similarity Checker</a>
	</div>
</div>

<style>
	.top-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin: 40px;
	}

	.buttons {
		margin-top: 40px;
		display: flex;
		gap: 24px;
	}

	a {
		padding: 8px 16px;
		border: none;
		border-radius: 4px;
		background-color: #d43109;
		color: white;
		font-size: 16px;
		cursor: pointer;
		text-decoration: none;
	}

	a:hover {
		background-color: #ff5a1f;
	}
</style>
