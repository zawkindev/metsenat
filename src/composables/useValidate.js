import { useVuelidate } from "@vuelidate/core";
import { numeric, required } from "@vuelidate/validators";
import { computed, reactive } from "vue";

export function useFormValidation() {
	const form = reactive({
		name: "",
		email: "",
		phone: "",
		password: "",
	});

	const rules = computed(() => {
		return {
			name: { required },
			password: {
				required,
			},
			phone: {
				required,
				numeric,
			},
		};
	});

	const v$ = useVuelidate(rules, form);

	async function handleSubmit() {
		const result = await v$.value.$validate();
		if (!result) {
			return v$;
		}
		return form;
	}

	return {
		form,
		handleSubmit,
		v$,
	};
}
