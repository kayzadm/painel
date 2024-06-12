<template>
  <div class="navbar-bg"></div>
  <nav class="navbar navbar-expand-lg main-navbar sticky">
    <div class="form-inline mr-auto">
      <ul class="navbar-nav mr-3">
        <li>
          <a href="#" data-toggle="sidebar" class="nav-link nav-link-lg collapse-btn">
            <FeatherIcon icon="align-justify" size="25"/></a>
        </li>
      </ul>
    </div>
    <ul class="navbar-nav navbar-right">
      <li class="dropdown">
        <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user" id="userProfile">
          <span class="d-sm-none d-lg-inline-block"></span></a>
        <div class="dropdown-menu dropdown-menu-right pullDown" id="dropdownUser">
          <a href="profile.html" class="dropdown-item has-icon">
            <FeatherIcon icon="user" size="20"/> Profile</a>
          <!-- <a href="" class="dropdown-item has-icon"> <i class="fas fa-cog"></i>
              Settings
            </a> -->
          <div class="dropdown-divider"></div>
          <a class="dropdown-item has-icon text-danger" id="logout" style="cursor: pointer">
            
            Logout
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
            <FeatherIcon icon="monitor" size="20" style="margin-top: 3px" />
            <span>Painel Adiministrativo</span>
          </a>
        </li>
      </ul>
    </aside>
  </div>

</template>
<script>
import FeatherIcon from "../FeatherIcon.vue"
export default {
  components: {
    FeatherIcon,
  },
  name: 'Navbar',
  data() {
    return {

    }
  },
}
</script>
  
<style>
</style>