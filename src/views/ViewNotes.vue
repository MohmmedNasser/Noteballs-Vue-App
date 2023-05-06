<template>
    <div class="notes">
        <div class="container">

            <div class="row">
                <div class="col-12">
                    <AddEditNote v-model="newNote" ref="addEditNote" bgColor="green" placeholder="Add a new note">
                        <template #buttons>
                            <button class="btn btn-add" :disabled="!newNote" @click="addNote">
                                Add New Note
                            </button>
                        </template>
                    </AddEditNote>
                </div>
            </div>

            <div class="row">
                <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
            </div>

        </div>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue';
    import Note from '@/components/Notes/Note.vue';
    import AddEditNote from '@/components/Notes/AddEditNote.vue'
    import { useStoreNotes } from '@/stores/storeNotes'
    import { useWatchCharacters } from '@/use/useWatchCharacters'

    const newNote = ref('');
    const addEditNote = ref(null);
    
    // store
    const storeNotes = useStoreNotes();
    const addNote = () => {
        storeNotes.addNote(newNote.value);
        newNote.value = "";
        addEditNote.value.focusTextarea();
    }

    // watch(newNote, (newvalue, oldvalue) => {
    //     if(newvalue.length === 200) {
    //         alert('Stop Typing !!!');
    //     }
    // });

    useWatchCharacters(newNote, 50)

</script>

<style lang="scss" scoped>

</style>