<template>
  <LoginTemplate>
    <template v-slot:menu>
      <br />
      <div class="contentArea">
        <div class="login">
          <div class="login-text">
            <span>Seja Bem-vindo</span>
            <span>a Phd do Brasil!</span>
            <Mensagens :msg="msg" v-show="msg" />
          </div>
          <div class="login-area">
            <form id="form" @submit.prevent="login">
              <label for="email">Email</label><br />
              <input type="text" class="login-input" v-model="email" id="email" placeholder="Email"
                name="email" /><br />
              <label for="senha">Senha</label><br />
              <input type="password" class="login-input" v-model="senha" id="password" placeholder="Senha"
                name="password" />
              <div class="button-form">
                <button type="submit" class="loginBtn" id="loginBtn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </template>
  </LoginTemplate>
</template>

<script>
import LoginTemplate from "@/views/templates/LoginTemplate.vue";
import Mensagens from "@/components/Mensagens";
import $ from "jquery";

export default {
  name: "Login",
  components: {
    Mensagens,
    LoginTemplate,
  },
  data() {
    return {
      msg: null,
      email: "",
      senha: "",
    };
  },
  methods: {
    setTokenCookie(token) {
      const d = new Date();
      d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
      const expires = "expires=" + d.toUTCString();
      document.cookie = "token=" + token + ";" + expires + ";path=/";
    },
    getTokenCookie() {
      const name = "token=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    login() {
      const data = {
        username: this.email,
        password: this.senha
      };

      $.ajax({
        type: 'POST',
        url: 'http://192.168.10.80/api/auth',
        data: JSON.stringify(data),
        contentType: 'application/json',
        dataType: 'json',
        processData: false,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        xhrFields: {
          withCredentials: true
        },
        beforeSend: () => {
          this.msg = '';
          $("#loginBtn").val('validando...');
        },
        success: (response) => {
          $("#loginBtn").val('entrar');
          $("#loginBtn").removeAttr("disabled");
          if (!response.errors && !response.message) {
            this.setTokenCookie(response.token)
            this.$router.push({ name: 'Home' });
          } else {
            this.handleErrors(response);
          }
        },
        error: () => {
          alert('Erro ao enviar formulário, por favor contate nosso suporte: (11)94952-2579 E-mail: console.tech@outlook.com');
          $("#loginBtn").val('entrar');
          $("#loginBtn").removeAttr("disabled");
        }
      });
    },
    handleErrors(response) {
      let errorMsg = '';

      if (typeof response.message === 'string') {
        errorMsg += response.message
      } else if (Array.isArray(response.message)) {
        response.message.forEach((msg) => {
          errorMsg += msg;
        });
      }
      if (response.errors) {
        Object.values(response.errors).forEach((errArray) => {
          errArray.forEach((err) => {
            errorMsg += err;
          });
        });
      }
      this.msg = errorMsg;
      setTimeout(() => {
        this.msg = '';
      }, 3000);
    }
  },
  mounted() {
    const token = this.getTokenCookie();
    if (token) {
      $.ajax({
        type: 'GET',
        url: 'http://192.168.10.80/api/user',
        headers: { 'Authorization': 'Bearer ' + token },
        success: (response) => {
          if (response.active == 0) {
            alert('Ops! Sua conta está desativada. Entre em contato conosco para ativar');
          } else {
            this.$router.push({ name: 'Home' });
          }
        }
      });
    }
  }
};
</script>
<style></style>