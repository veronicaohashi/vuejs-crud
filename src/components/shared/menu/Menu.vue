<template>
  <nav>
    <ul>
      <li v-for="route in routes">
        <router-link :to="route.path ? route.path : '/'">{{ route.titulo }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: { 
      routes:{
        required: true,
        type: Array
      }
    }   
  }
</script>

<style>
  .pagina-enter, .pagina-leave-active {
    opacity: 0;
  }

  .pagina-enter-active, .pagina-leave-active{
    transition: opacity .4s;
  }
</style>