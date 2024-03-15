<template>

    <header>
        <Navbar cor="black" url="/" :logo="require('@/assets/light-logo.png')">
            <li><router-link to="/cadastro">Registre-se</router-link></li>
            <li><router-link to="/login">Entrar</router-link></li>
        </Navbar>
    </header>

    <main>
        <slot></slot>

    </main>

    <Footer 
    cor="black" empresa="PHD DO BRASIL" 
    :logo="require('@/assets/light-logo.png')" 
    :descricao="'Laboratório de Injetáveis'"
    :anoAtual="anoAtual">

        <li><a href="https://wa.me/5511989283400" target="_blank">Whatsapp</a></li>
        <li><a href="https://phddobrasil.com.br" target="_blank">Site Oficial</a></li>
        <li><a href="https://www.instagram.com/phddobrasil/" target="_blank">Instagram</a></li>
        
    </Footer>
    
</template>
  
<script>  
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
      components: {
          Navbar,
          Footer,
  
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


footer ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

footer ul li a:hover {
    color: #30a0a0;
    text-decoration: underline; /* Efeito ao passar o mouse */
}
  
</style>