import { computed } from "vue";

export function useExtension(type, name) {
  return computed(() => {
    return {
      type,
      name,
    };
  });
}
