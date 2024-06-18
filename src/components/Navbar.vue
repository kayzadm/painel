<template>
  <div class="navbar-bg"></div>
  <nav class="navbar navbar-expand-lg main-navbar sticky">
    <div class="form-inline mr-auto">
      <ul class="navbar-nav mr-3">
        <li>
          <a href="#" data-toggle="sidebar" class="nav-link nav-link-lg collapse-btn">
            <FeatherIcon icon="menu" size="25" />
          </a>
        </li>
      </ul>
    </div>
    <ul class="navbar-nav navbar-right">
      <li class="dropdown">
        <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user" id="userProfile"
          style="margin-right: 10px;">
          <FeatherIcon icon="user" size="20" />
          <span class="d-sm-none d-lg-inline-block"></span>
        </a>
        <div class="dropdown-menu dropdown-menu-right pullDown" id="dropdownUser" v-if="user">
          <div class="dropdown-title">{{ user.name }}</div>
          <a href="" class="dropdown-item has-icon">
            <FeatherIcon icon="user" size="20" /> Profile
          </a>
          <!-- <a href="" class="dropdown-item has-icon"> <i class="fas fa-cog"></i>
              Settings
            </a> -->
          <div class="dropdown-divider"></div>
          <a class="dropdown-item has-icon text-danger" @click="logout" style="cursor: pointer">
            <FeatherIcon icon="log-out" size="20" /> logout
          </a>
        </div>
      </li>
    </ul>
    <div id="response" class="response"></div>
  </nav>
  <div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href="#"><img alt="" src="../assets/img/phddobrasil.png" class="header-logo" />
        </a>
      </div>
      <ul class="sidebar-menu">
        <li class="active">
          <a class="nav-link" href="">
            <FeatherIcon icon="sliders" size="20" style="margin-top: 3px" />
            <span>Painel Adiministrativo</span>
          </a>
        </li>
      </ul>
    </aside>
  </div>

</template>
<script>
import FeatherIcon from "../FeatherIcon.vue"
import axios from 'axios';
export default {
  components: {
    FeatherIcon,
  },
  name: 'Navbar',
  data() {
    return {
      user: null
    }
  },
  methods: {
    deleteTokenCookie() {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    },
    getUserData() {
      const token = this.getTokenCookie();
      if (token) {
        axios.get(`${apiUrl}/user`, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
          .then(response => {
            this.user = response.data;
          })
          .catch(error => {
            console.error('Erro ao obter os dados do usuário:', error);
          });
      } else {
        this.$router.push({ name: 'Login' });
        // this.deleteTokenCookie()
      }
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
    logout() {
      const token = this.getCookie('token')
      axios.post(`${apiUrl}/destroy`, {}, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .then(response => {
          this.deleteTokenCookie();
          this.$router.push({ name: 'Login' });
        })
        .catch(error => {
          console.error('Erro ao fazer logout:', error);
        });
    },
  },
  mounted() {
    this.getUserData();
  }
}
</script>

<style></style>