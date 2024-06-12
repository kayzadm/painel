<template>
    <div id="response">
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
    width: 80%;
    color: #DDD;
}

.mensagem-container {
    color: #0e40d6;
    background-color: #CCE5FF;
    border: 2px solid #B8DAFF;
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
    margin: 30px auto;
}

</style>