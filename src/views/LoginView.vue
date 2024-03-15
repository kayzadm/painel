<template>
    
    <LoginTemplate>

        <template v-slot:menu>

            <br>
            
            <Mensagens :msg="msg" v-show="msg" />

             <CardMenu>
 
                <div class="row">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-image">
                                
                            </div>
                            <div class="card-title">
                                
                            </div>
                            <div class="card-content">
                                
                                <img id="logo_phd" :src="require('@/assets/logo.png')" alt="Logo">
                            
                                <span v-if="!cadastro" class="mb2">
                                    <input type="text" name="email" id="" placeholder="E-mail" v-model="email">
                                    <input type="password" name="password" id="" placeholder="Senha" v-model="password">
                                    <button class="waves-effect waves-light btn" v-on:click="login()">Entrar</button> &nbsp; 
                                    <router-link  class="btn red" to="/cadastro">Cadastre-se</router-link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
 
 
             </CardMenu>
 
         </template>

    
        <template v-slot:principal>
            
            <br><br>

                <div class="row">
                    <div class="col s12 ">
                    <div class="card">
                        <div class="card-image">
                        <img src="https://phddobrasil.com.br/wp-content/uploads/2023/07/BANNER-SITE-1.jpg">
                        <span class="card-title">Card Title</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                    </div>
                </div>


        </template>
        

    </LoginTemplate>

</template>

<script>

import LoginTemplate from '@/views/templates/LoginTemplate.vue'
import Mensagens from '@/components/Mensagens'
import axios from 'axios';

export default {
    name: 'Login',
    props: [],
    components: {
        LoginTemplate,
        Mensagens,

    },
    data() {
        return {
            msg: null,
            email: null,
            senha: null,
        }
    },
    methods: {
        login() {
            const data = {
                email: this.email,
                password: this.senha
            };

            const headers = {
                'Content-Type': 'application/json',
                // Adicione quaisquer outros cabeçalhos necessários aqui
            };

            axios.post('http://localhost:8000/api/login', data, { 
                
                
                headers: {
                    'Content-Type': 'application/json',
                }, 
                
                withCredentials: true })

                .then(response => {
                    console.log(response.data); // Se a resposta contiver dados
                })
                .catch(error => {
                    console.error(error);
                    this.msg = 'Ocorreu um erro durante o login. Por favor, tente novamente.';
                });
        }
}

}
</script>

<style>

#logo_phd {
    
    width: 150px;

}

</style>