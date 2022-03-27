<script lang="ts">
	import Textfield from '@smui/textfield';
	import Switch from '@smui/switch';
	import FormField from '@smui/form-field';
	import Button, { Label } from '@smui/button';

	import { InsertRecord, AllRecordsDoc } from '../graphql/_generated';

	let initialValues = {
		url: '',
		boundary: '',
		periodicity: 10,
		label: '',
		active: false,
		tags: ''
	};

	let values = { ...initialValues };

	const insert = () => {
		InsertRecord({
			variables: {
				...values
			},
			refetchQueries: [{ query: AllRecordsDoc }]
		});

		// Clear out the form
		values = { ...initialValues };
	};
</script>

<div class="form-line">
	<Textfield bind:value={values.url} label="URL" />
	<Textfield bind:value={values.boundary} label="Boundary" />
	<Textfield bind:value={values.periodicity} label="Periodicity (s)" />
	<Textfield bind:value={values.label} label="Label" />
	<FormField>
		<Switch bind:checked={values.active} />
		<span slot="label">Active</span>
	</FormField>
	<Button on:click={() => insert()} variant="raised">
		<Label>Create new record</Label>
	</Button>
</div>

<style lang="scss" scoped>
	.form-line {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 16px;
	}
</style>
