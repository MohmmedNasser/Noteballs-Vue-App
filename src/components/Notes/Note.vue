<template>
    <div class="col-lg-6 mb-4">
        <div class="card">
            <div class="card-body">
                <p class="card-text">
                    {{ note.content }}
                </p>
                <div class="d-flex justify-content-end text-muted mt-2">
                    <small>
                        {{ characterLength }}
                    </small>
                </div>
            </div>
            <div class="card-footer bg-transparent">
                <div class="d-flex w-100 justify-content-around">
                    <RouterLink :to="`editNote/${ note.id }`" class="btn btn-text">Edit</RouterLink>
                    <button class="btn btn-text" @click.prevent="storeNotes.deleteNote(note.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from "@vue/runtime-core";
    import { useStoreNotes } from '@/stores/storeNotes'

    // store
    const storeNotes = useStoreNotes();
    
    const props = defineProps({
        note: {
            type: Object,
            required: true,
        }
    });

    const emit = defineEmits(['deleteNote'])

    const characterLength = computed(() => {
        let length = props.note.content.length
        let description =  length > 1 ? 'Characters' : 'Character'
        return ` ${length} ${description}`
    });


</script>

<style lang="scss" scoped>
    .card {
        border: none;
        box-shadow: 0 0 15px 2px rgba(0,0,0,0.05);
        .card-body {
            .card-text {
                font-size: 15px;
            }
        }
        .card-footer {
            border-color: #f1f1f1;
            padding: 0;
            .btn {
                font-size: 14px;
                font-weight: 500;
                color: #2a529b;
                flex: 1;
                padding: 10px 15px;
                border-right: 1px solid #f1f1f1;
                border-radius: 0;
                text-transform: uppercase;
                &:active {
                    border-color: transparent;
                }
                &:last-child {
                    border-right: 0;
                }
                &:hover {
                    background-color: #f8f8f8;
                }
            }
        }
    }
</style>
