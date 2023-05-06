import { watch } from "vue"

export function useWatchCharacters(valueToWatch, maxChar = 100) {
    watch(valueToWatch, (newvalue) => {
        if(newvalue.length === maxChar) {
            alert(`only ${maxChar} characters allowed gosh darnit`);
        }
    });
}