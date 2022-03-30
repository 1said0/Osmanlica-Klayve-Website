<template>
  <div id="nav" class="nav-barx">
    <router-link to="/windows" class="nav-a">Windows</router-link> |
    <router-link to="/macos" class="nav-a">Macos</router-link> |
<!--    <router-link to="/ios" class="nav-a">Ios</router-link> |-->
    <router-link to="/android" class="nav-a">Android</router-link>
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>
