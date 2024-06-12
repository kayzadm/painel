<template>
    <div id="responseHome">
        <p>  {{ msg }} </p>
    </div>
</template>

<script>
export default {
    name: 'MensagensHome',
    props: {
        msg: String
    }
}
</script>

<style>

#responseHome {
    z-index: 1000;
    margin-top: 80px;
    text-align: center;
    font-size: 13px;
    width: 100%;
    color: #fff;
    position: fixed;
    top: 0;
    background-color: rgb(255, 0, 0, 0.6);
} 

</style>