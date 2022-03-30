<template>
  <div class="bdy">
    <header></header>
    <div class="mid">
      <h1 class="hero-text">Osmanlıca Klavye artık tüm cihazlarda</h1>
      <button class="">

        <router-link
          v-if="getOS() === 'macos'"
          to="/macos"
          class="m-button"
        >
          Macos için indir
        </router-link>
        <router-link
          v-else-if="getOS() === 'android'"
          to="/android"
          class="m-button"
        >
          Android için indir
        </router-link>

        <router-link
            v-else
            to="/windows"
            class="m-button"
        >
          Windows için indir
        </router-link>
      </button>
      <h4 class="hero-subtext">
        Diğer platformlar
        <Header></Header>
      </h4>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";

export default {
  name: "home",
  components: { Header },
  data: function () {
    return {};
  },
  methods: {
    getOS: function () {
      let userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        // windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        // iosPlatforms = ["iPhone", "iPad", "iPod"],
        os = null;
      if (macosPlatforms.indexOf(platform) !== -1) {
        os = "macOS";
      } else if (/Android/.test(userAgent)) {
        os = "android";
      } else {
        os = "windows";
      }
      return os;
    },
    components: {
      // eslint-disable-next-line vue/no-unused-components
      Header,
    },
  },
};
</script>

<style></style>
