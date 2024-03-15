<template>

  <AppTemplate>

    <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="https://phddobrasil.com.br/wp-content/uploads/2023/07/BANNER-SITE-1.jpg">
          <span class="card-title"></span>
        </div>
        <div class="card-content">
          <p>fique por dentro das novidades</p>
        </div>
        <div class="card-action">
          <a href="#">Saiba mais</a>
        </div>
      </div>
    </div>

    <div class="row col s4">
    <div class="card">
      <div class="card-image">
        <img src="https://phddobrasil.com.br/wp-content/uploads/2023/07/BANNER-SITE-1.jpg">
        <span class="card-title"></span>
      </div>
      <div class="card-content">
        <p>fique por dentro das novidades</p>
      </div>
      <div class="card-action">
        <a href="#">Saiba mais</a>
      </div>
    </div>
    </div>
    
  </div>



  </AppTemplate>
  
</template>

<script>

import AppTemplate from './templates/AppTemplate.vue';

export default {
  name: 'Home',
    props: [],
    components: {
        AppTemplate,

    },
}
</script>



<style>

</style>