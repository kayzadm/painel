<template>
  <footer :class="'page-footer '+ cor">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <img id="logo_footer" :src="logo" alt="Logo">
          <p class="grey-text text-lighten-4">{{descricao || "Sua descrição"}}</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Canais de Atendimentos</h5>
          <ul>
            <slot></slot>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
       {{ empresa || 'Empresa' }}
        © {{ ano || '2024' }} Copyright

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props:['cor','logo','descricao','ano', 'empresa'],
  data () {
    return {

    }
  }
}
</script>


<style scoped>

#logo_footer {
  width: 200px;
}


</style>
