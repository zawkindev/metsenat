import { useVuelidate } from "@vuelidate/core";
import { minLength, numeric, required } from "@vuelidate/validators";
import { computed, reactive } from "vue";

export function useFormValidation() {


  return {
    form,
    validateSubmit,
    v$,
  };
}
