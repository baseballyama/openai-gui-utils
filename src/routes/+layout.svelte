<script lang="ts">
	import { page } from '$app/stores';
	import GitHub from '$lib/GitHub.svelte';
</script>

<header>
	<h1>OpenAI GUI Utils</h1>
	<nav>
		<a href="/" class:selected={$page.url.pathname === '/'}>Home</a>
		<a href="/completions" class:selected={$page.url.pathname === '/completions'}
			>Completion API Visualizer</a
		>
		<a href="/embeddings" class:selected={$page.url.pathname === '/embeddings'}
			>Embeddings and Cosine Similarity Checker</a
		>
	</nav>
	<GitHub href="https://github.com/baseballyama/openai-gui-utils" />
</header>

<main>
	<slot />
</main>

<footer class="footer">
	Created by
	<a href="https://github.com/baseballyama" target="_blank" rel="noopener noreferrer">
		baseballyama
	</a>
</footer>

<style>
	:global(body) {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	main {
		margin: 0 24px;
		flex-grow: 1;
	}

	header {
		position: sticky;
		top: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-self: center;
		padding: 4px 16px;
		gap: 16px;
		width: 100%;
		border-bottom: 1px solid #eaeaea;
		box-shadow: 0 0 4px 0 #0000001a;
		background-color: white;
		margin-bottom: 16px;
	}

	header > h1 {
		font-family: 'Comic Sans MS', cursive;
		flex-grow: 1;
	}

	header > nav {
		display: flex;
		gap: 16px;
	}

	a {
		text-decoration: none;
		color: #000;
	}

	a:hover {
		text-decoration: underline;
	}

	a.selected {
		text-decoration: underline;
		color: #d43109;
	}

	footer {
		padding: 8px 16px;
		text-align: center;
		flex-shrink: 0;
	}
</style>
