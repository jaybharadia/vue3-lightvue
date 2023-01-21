import { computed, unref } from "vue";

export function useExtension(type, name) {
  // console.log("inside useExtension", type, name);
  // const rawType = unref(type);
  return computed(() => {
    return {
      type: type.value,
      name,
    };
  });
}
