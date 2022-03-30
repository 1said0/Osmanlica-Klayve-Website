<template>
  <article class="bodym">
    <h1>MacOS için Osmanlıca Klavye</h1>
    <a
      class="hero-button"
      href="https://drive.google.com/uc?export=download&id=1sDGLhJPljE_YMiOcpS5NOHIYDmzGtFHv"
      download="hv-osmanlica-klavye-main.zip"
    >
      Şimdi İndir
    </a>
    <h4 class="hero-subtext">MacOS</h4>
  </article>
</template>
<script>
// import axios from "axios";

export default {
  name: "macos",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    // onClick() {
    //   axios({
    //     url: 'https://drive.google.com/file/d/1sDGLhJPljE_YMiOcpS5NOHIYDmzGtFHv/view?usp=sharing',
    //     method: 'GET',
    //     responseType: 'blob',
    //   }).then((response) => {
    //     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
    //     var fileLink = document.createElement('a');
    //
    //     fileLink.href = fileURL;
    //     fileLink.setAttribute('download', 'hv-osmanlica-klavye-main.zip');
    //     document.body.appendChild(fileLink);
    //
    //     fileLink.click();
    //   });
    // }
  },
};
</script>

<style></style>
