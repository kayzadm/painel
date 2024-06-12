<template>
    <div id="response" class="mensagem-container">
        <p>  {{ msg }} </p>
    </div>
</template>

<script>
export default {
    name: 'Mensagens',
    props: {
        msg: String
    }
}
</script>

<style scoped>
#response {
    font-size: 13px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: rgb(255, 0, 0, 0.6);
    position: absolute;
    top: 0;
    margin-top: 7px;
    width: 90%;
    color: #DDD;
}

</style>