<template>
    <div class="stats">
        <div class="container">
            <table class="table bg-white">
                <thead>
                    <tr>
                        <th scope="col">Stat</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Numer of Notes</td>
                        <td>{{ storeNotes.totalNoteCount }}</td>
                    </tr>
                    <tr>
                        <td>Numer of Character (of all note)</td>
                        <td>{{ storeNotes.totalCharactersCount }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    import { useStoreNotes } from '@/stores/storeNotes'

    const storeNotes = useStoreNotes();

</script>

<style lang="scss" scoped>

</style>