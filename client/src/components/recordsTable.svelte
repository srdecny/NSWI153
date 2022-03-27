<script lang="ts">
	import DataTable, { Head, Row, Body, Cell, Pagination } from '@smui/data-table';
	import IconButton from '@smui/icon-button';
	import CircularProgress from '@smui/circular-progress';
	import { Label } from '@smui/common';
	import Select, { Option } from '@smui/select';

	import { AllRecords } from '../graphql/_generated';

	$: records = AllRecords({});

	let rowsPerPage = 10;
	let currentPage = 0;

	$: items = $records.data.records || [];
	$: start = currentPage * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, items.length);
	$: slice = items.slice(start, end);
	$: lastPage = Math.max(Math.ceil(items.length / rowsPerPage) - 1, 0);

	$: if (currentPage > lastPage) {
		currentPage = lastPage;
	}
</script>

{#if $records.loading}
	<div style="display: flex; justify-content: center">
		<CircularProgress style="height: 32px; width: 32px;" indeterminate />
	</div>
{:else if $records.error}
	<div class="error">
		{$records.error.message}
	</div>
{:else}
	<DataTable>
		<Head>
			<Row>
				<Cell>url</Cell>
				<Cell>boundary</Cell>
				<Cell>periodicity</Cell>
				<Cell>label</Cell>
				<Cell>active</Cell>
				<Cell>tags</Cell>
			</Row>
		</Head>
		<Body>
			{#each slice as record}
				<Row>
					<Cell>{record.url}</Cell>
					<Cell>{record.boundary}</Cell>
					<Cell>{record.periodicity}</Cell>
					<Cell>{record.label}</Cell>
					<Cell>{record.active}</Cell>
					<Cell>{record.tags}</Cell>
				</Row>
			{/each}
		</Body>
		<Pagination slot="paginate">
			<svelte:fragment slot="rowsPerPage">
				<Label>Rows Per Page</Label>
				<Select variant="outlined" bind:value={rowsPerPage} noLabel>
					<Option value={10}>10</Option>
					<Option value={25}>25</Option>
					<Option value={100}>100</Option>
				</Select>
			</svelte:fragment>
			<svelte:fragment slot="total">
				{start + 1}-{end} of {items.length}
			</svelte:fragment>

			<IconButton
				class="material-icons"
				action="first-page"
				title="First page"
				on:click={() => (currentPage = 0)}
				disabled={currentPage === 0}>first_page</IconButton
			>
			<IconButton
				class="material-icons"
				action="prev-page"
				title="Prev page"
				on:click={() => currentPage--}
				disabled={currentPage === 0}>chevron_left</IconButton
			>
			<IconButton
				class="material-icons"
				action="next-page"
				title="Next page"
				on:click={() => currentPage++}
				disabled={currentPage === lastPage}>chevron_right</IconButton
			>
			<IconButton
				class="material-icons"
				action="last-page"
				title="Last page"
				on:click={() => (currentPage = lastPage)}
				disabled={currentPage === lastPage}>last_page</IconButton
			>
		</Pagination>
	</DataTable>
{/if}
