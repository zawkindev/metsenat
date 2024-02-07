import { useVuelidate } from "@vuelidate/core";
import { minLength, numeric, required } from "@vuelidate/validators";
import { computed, reactive } from "vue";

export function useFormValidation() {
  const form = reactive({
    name: "",
    email: "",
    phone: "",
    password: "",
    institute: "",
    studentType: ""
  });

  const rules = computed(() => {
    return {
      name: { required },
      password: {
        required,
        minLength: minLength(8), 
      },
      phone: {
        required,
        numeric,
        minLength: minLength(9), 
      },
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
