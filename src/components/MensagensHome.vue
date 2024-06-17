<template>
    <div id="responseHome" v-if="msg" :class="[alertClass]">
        <p> {{ msg }} </p>
    </div>
</template>

<script>
export default {
    name: 'MensagensHome',
    props: {
        msgType: {
            type: String,
            default: ''
        },
        msg: {
            type: String,
            default: ''
        }
    },
     computed: {
    alertClass() {
      return {
        'success': this.msgType === 'success',
        'danger': this.msgType === 'danger',
        'warning': this.msgType === 'warning',
        'info': this.msgType === 'info'
      };
    }
  }
}
</script>

<style>
.success {
    color: #fff;
    background-color: rgb(0, 255, 60, 0.6) !important;
}

.danger {
    color: #fff;
    background-color: rgb(255, 0, 0, 0.6) !important;
}

#responseHome {
    padding-top: 15px;
    text-align: center;
    z-index: 1000;
    margin-top: 80px;
    font-size: 13px;
    width: 100%;
    position: fixed;
    top: 0;
}
</style>