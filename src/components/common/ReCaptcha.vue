<template>
  <vue-recaptcha
    v-show="showRecaptcha"
    sitekey="6LeCc2spAAAAAPBdirVnPM8ZlkanSEOOkOmxsEWy"
    size="normal"
    theme="light"
    ref="vueRecaptcha"
  >
  </vue-recaptcha>
</template>

<script>
import vueRecaptcha from "vue3-recaptcha2";

export default {
  name: "app",
  components: {
    vueRecaptcha,
  },
  data() {
    return {
      showRecaptcha: true,
      loadingTimeout: 30000, // 30 seconds
    };
  },
  methods: {
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
  },
};
</script>
<style>


</style>
