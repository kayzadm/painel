<template>
    <nav :class="cor || 'teal'">
      <div class="nav-wrapper container">
  
        <router-link :to="url || '/'">
          <img :src="logo" alt="Logo" class="nav-logo">
        </router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <slot></slot>
  
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
      name: 'Navbar',
      props: ['cor', 'url', 'logo'],
      data(){
          return {
  
          }
      },
  }
  </script>
  
  <style>

  .nav-logo{
    width: 110px;
    margin-top: 10px;
  }

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

nav ul li a:hover {
    color: #30a0a0;
    text-decoration: underline; /* Efeito ao passar o mouse */
}
  
  </style>