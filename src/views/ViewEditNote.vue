<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <AddEditNote  ref="addEditNote" v-model="noteContent" bgColor="lite" placeholder="Edit Note" label="Edit note">
                    <template #buttons>
                        <RouterLink to="/" class="btn cancel-btn">
                            Cancle
                        </RouterLink>
                        <button class="btn btn-add" :disabled="!noteContent" @click="handleSaveClicked">
                            Save Note
                        </button>
                    </template>
                </AddEditNote>
            </div>
        </div>
    </div>
</template>

<script setup>
    import AddEditNote from '@/components/Notes/AddEditNote.vue'
    import { ref } from 'vue';
    import { useStoreNotes } from '@/stores/storeNotes';
    import { useRoute, useRouter } from 'vue-router';


    const noteContent = ref('');
    const storeNotes = useStoreNotes();
    const route = useRoute();
    const router = useRouter();

    noteContent.value = storeNotes.getNoteContent(route.params.id);

    const handleSaveClicked = () => {
        storeNotes.updateNote(route.params.id, noteContent.value);
        router.push('/');
    }

</script>

<style lang="scss" scoped>

</style>