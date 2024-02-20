<template>
  <vue-recaptcha
    v-show="showRecaptcha"
    sitekey="6LeCc2spAAAAAPBdirVnPM8ZlkanSEOOkOmxsEWy"
    size="normal"
    theme="light"
    ref="vueRecaptcha"
    @verify="(response) => $emit('verify', response)"
    class="w-12"
  >
  </vue-recaptcha>
</template>

<script>
import vueRecaptcha from "vue3-recaptcha2";

export default {
  name: "app",
  emits: ["verify"],
  components: {
    vueRecaptcha,
  },
  data() {
    return {
      showRecaptcha: true,
      loadingTimeout: 30000,
    };
  },
  methods: {
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    onCaptchaVerified(response) {
      console.log("reCAPTCHA verified:", response);
    },
  },
};
</script>
