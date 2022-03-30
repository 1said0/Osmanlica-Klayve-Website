<template>
  <div id="app">
    <div class="root">
      <div class="imgs">
        <img
          v-once
          alt="Osmanlıca Klavye"
          src="./assets/img-1.png"
          v-bind:class="title"
        />
      </div>
      <div class="texts">
        <Header />
        <router-view />
        <div class="footer">
          <h3>© 2021 Haytek Yazılım ve Teknoloji Aş.</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";

export default {
  name: "appx",
  data: function () {
    return {
      title: "img-1",
    };
  },
  methods: {
    clck: function () {
      alert("Butona tıklandı");
    },
    getOS: function () {
      var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"],
        os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = "macOS";
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = "iOS";
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = "Windows";
      } else if (/Android/.test(userAgent)) {
        os = "Android";
      } else if (!os && /Linux/.test(platform)) {
        os = "Linux";
      }
      return os;
    },
  },
  components: {
    Header,
    // home,
  },
};
</script>

<style></style>
