<template>
  <div v-if="records">
    <q-table :rows="records.records" :columns="columns" row-key="id" />
  </div>
  <div v-else>
    <q-spinner color="primary" size="3em" />
  </div>
  <NewRecordForm />
</template>

<script lang="ts">
import { QTableProps } from 'quasar';
import {
  defineComponent,
} from 'vue';
import NewRecordForm from './NewRecordForm.vue';

import { useAllRecordsQuery, Records } from '../graphql/_generated'

const columns: QTableProps['columns'] = [
  {
    name: 'url',
    label: 'URL',
    field: (row: Records) => row.url
  },
  {
    name: 'label',
    label: 'Label',
    field: (row: Records) => row.label
  },
  {
    name: 'boundary',
    label: 'Regex boundary',
    field: (row: Records) => row.boundary
  },
  {
    name: 'periodicity',
    label: 'Periodicity (seconds)',
    field: (row: Records) => row.periodicity
  },
  {
    name: 'active',
    label: 'Is active?',
    field: (row: Records) => row.active
  }
]

export default defineComponent({
  name: 'RecordsTable',
  components: {
    NewRecordForm
  },
  data() {
    const records = useAllRecordsQuery();
    return {
      records: records.data,
      columns
    }

  },
});
</script>
