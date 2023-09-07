<script lang="ts">
	export let messages: { role: 'system' | 'user' | 'assistant'; content: string }[] = [];
</script>

<div class="chat-wrapper">
	{#each messages as message}
		<div class="message-wrapper">
			{#if message.role === 'assistant'}
				<img src="openai.png" alt="openai" width="16" height="16" />
			{/if}
			<div class="message {message.role}">
				<div>
					{#if message.role === 'system'}
						<div class="message-content">{message.role}: {message.content}</div>
					{:else}
						<div class="message-content">{message.content}</div>
					{/if}
				</div>
			</div>
			{#if message.role === 'user'}
				<img src="user.png" alt="openai" width="16" height="16" />
			{/if}
		</div>
	{/each}
</div>

<style>
	.chat-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.message-wrapper {
		display: inline-flex;
		width: 100%;
	}

	.message {
		display: inline-flex;
		position: relative;
		padding: 8px;
		border-radius: 4px;
	}

	.system {
		width: 100%;
		margin-bottom: 12px;
		background-color: azure;
	}

	.user {
		margin: 8px 12px 0 auto;
		background-color: beige;
		max-width: 70%;
	}

	.user::after {
		content: '';
		border: 10px solid transparent;
		border-left: 22px solid beige;
		position: absolute;
		right: -20px;
		top: -12px;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		transform: rotate(-45deg);
	}

	.assistant {
		margin: 8px auto 0 12px;
		background-color: beige;
		max-width: 70%;
	}

	.assistant::after {
		content: '';
		border: 10px solid transparent;
		border-left: 22px solid beige;
		position: absolute;
		left: -20px;
		top: -12px;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		transform: rotate(225deg);
	}
</style>
