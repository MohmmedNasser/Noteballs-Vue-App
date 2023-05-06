<template>
    <div class="form-box" :class="`bg-${ bgColor }`">
        <div class="mb-3">
            <label v-if="label">{{ label }}</label>
            <textarea class="form-control" :placeholder="placeholder" ref="textareaRef" v-model="modelValue"  @input="$emit('update:modelValue', modelValue)" v-autofocus></textarea>
        </div>
        <div class="d-flex justify-content-end">
            <slot name="buttons"/>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { vAutofocus } from '@/directives/vAutofocus';

    const props = defineProps({
        modelValue: {
            type: String,
            required: true,
        },

        bgColor: {
            type: String,
            default: 'green'
        },

        placeholder: {
            type: String,
            default: 'Type something...'
        },
        label: {
            type: String,
        }
    });
    const emit = defineEmits(['update:modelValue']);
    // const textareaRef = ref(null)
    // const focusTextarea = () => {
    //     textareaRef.value.focus();
    // }

    // defineExpose({
    //     focusTextarea,
    // });

    // logal directive
    // const vAutofocus = {
    //     mounted(el) {
    //         el.focus();
    //     },
    // }

</script>

<style lang="scss" scoped>

    .form-box {
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 10px;
        textarea {
            height: 150px;
            resize: none;
            border: none !important;
            transition: 0.3s;
            padding: 10px 15px;
            border-radius: 3px;
        }
    }

    .bg-green {
        background: #0b8049;
    }

    .bg-lite {
        background: #027c9b;
    }

</style>