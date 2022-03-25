<script>
	import { operationStore, query } from '@urql/svelte';

	const todos = operationStore(`
    query {
      test_table {
        id
        name
      }
    }
  `);
	query(todos);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#if $todos.fetching}
	<p>Loading...</p>
{:else if $todos.error}
	<p>Oh no... {$todos.error.message}</p>
{:else}
	<ul>
		{#each $todos.data.test_table as todo}
			<li>{todo.id}</li>
			<li>{todo.name}</li>
		{/each}
	</ul>
{/if}
