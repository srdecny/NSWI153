<script>
	import { operationStore, query } from '@urql/svelte';
	import DataTable, { Head, Row, Body, Cell } from '@smui/data-table';

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
	<DataTable>
		<Head>
			<Row>
				<Cell>id</Cell>
				<Cell>name</Cell>
			</Row>
		</Head>
		<Body>
			{#each $todos.data.test_table as todo}
				<Row>
					<Cell>{todo.id}</Cell>
					<Cell>{todo.name}</Cell>
				</Row>
			{/each}
		</Body>
	</DataTable>
{/if}
