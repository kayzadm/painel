<template>

    
    
      <header>
        <Navbar cor="black" url="/" :logo="require('@/assets/light-logo.png')">
            <li><router-link to="/cadastro">Registre-se</router-link></li>
            <li><router-link to="/login">Entrar</router-link></li>
        </Navbar>
      </header>
    
        <main>
          <div class="container">

            <div class="row">

              <Grid tamanho="6">
                  <slot name="menu"> </slot>
              </Grid>

              <Grid tamanho="6">
                  <slot name="principal"></slot>
              </Grid>
                  

                
            </div>

          </div>
          
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
    import Navbar from '@/components/Navbar'
    import Footer from '@/components/Footer'
    
    export default {
      name: 'SiteTemplate',
      components: {
            Navbar,
            Footer,
            

      },
    }
    </script>
    
    <style>
    
    </style>
    