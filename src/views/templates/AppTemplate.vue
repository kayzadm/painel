<template>



    <main>
        
        <slot></slot>

    </main>


</template>


<script>

export default {
    components: {
    },
    data() {

        return {

            anoAtual: new Date().getFullYear()
        };
    },
    mounted() {
        // Altera o título após a montagem da instância Vue
        document.title = 'PHD DO BRASIL';
    }
}
</script>

<style>
</style>