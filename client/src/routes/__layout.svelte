<script>
    import {initClient} from '@urql/svelte'
    initClient({
        url: 'http://localhost:8080/v1/graphql',
    })
</script>


<slot></slot>