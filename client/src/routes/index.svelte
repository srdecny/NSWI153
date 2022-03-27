<script>
	import RecordsTable from '../components/recordsTable.svelte';
	import RecordEntryForm from '../components/recordEntryForm.svelte';
</script>

<div class="container">
	<RecordsTable />
	<RecordEntryForm />
</div>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: row;
		gap: 50px;
		align-items: center;
		justify-content: center;
		margin-top: 100px;
	}
</style>
