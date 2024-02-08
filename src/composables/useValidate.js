import { useVuelidate } from "@vuelidate/core";
import { minLength, numeric, required } from "@vuelidate/validators";
import { computed, reactive } from "vue";

export function useFormValidation() {
  const form = reactive({
    name: "",
    phone: "",
    password: "",
    institute: "",
    studentType: "",
    contract: "",
    application: ""
  });

  const rules = computed(() => {
    return {
      name: { required },

      phone: {
        required,
        numeric,
        minLength: minLength(9),
      },
      password: {
        required,
        minLength: minLength(8),
      },
      institute: { required },
      studentType: { required },
      contract: { numeric, required },
      application: { required },
    };
  });

  const v$ = useVuelidate(rules, form);

  async function validateSubmit() {
    const result = await v$.value.$validate();
    if (!result) {
      return v$;
    }
    return form;
  }

  return {
    form,
    validateSubmit,
    v$,
  };
}
