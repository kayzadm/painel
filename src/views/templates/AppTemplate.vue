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
@import url("../../assets/css/app.min.css");
@import url("../../assets/css/custom.css");
@import url("../../assets/css/style.css");
@import url("../../assets/css/components.css");
</style>