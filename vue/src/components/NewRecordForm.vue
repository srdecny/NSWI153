<template>
  <q-form>
    <q-input type="text" v-model="url" label="URL" />
    <q-input type="text" v-model="label" label="Label" />
    <q-input type="text" v-model="boundary" label="Regex boundary" />
    <q-input
      type="number"
      v-model="periodicity"
      label="Periodicity (seconds)"
    />
    <q-toggle v-model="active" label="Is active?" />
    <q-btn @click="addRecord" color="primary" label="Add record" />
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import { useInsertRecordMutation } from '../graphql/_generated';

export default defineComponent({
  name: 'NewRecordForm',

  setup() {
    const addRecord = useInsertRecordMutation();

    const url = ref('');
    const boundary = ref('');
    const label = ref('');
    const periodicity: Ref<number> = ref(null);
    const active = ref(false);
    const tags = ref('');

    return {
      url,
      boundary,
      label,
      periodicity,
      active,
      tags,

      addRecord: async () => {
        const variables = {
          url: url.value,
          boundary: boundary.value,
          label: label.value,
          periodicity: periodicity.value,
          active: active.value,
          tags: tags.value,
        };
        const response = await addRecord.executeMutation({ ...variables });
        console.log(response);
      },
    };
  },
});
</script>
