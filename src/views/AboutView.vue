<template>
  <Navbar/>
  
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'AboutView',
  components: {
    Navbar,
  }
}
</script>

<style>

</style>