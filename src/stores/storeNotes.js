import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid';


export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: 'id1',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, praesentium!.',
        
                },
                {
                    id: 'id2',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda officiis ipsam aliquam voluptas. Quaerat.',
        
                },
            ]
        }
    },

    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter(note => note.id === id)[0].content;
            }
        },

        totalNoteCount: (state) => {
            return state.notes.length
        },

        totalCharactersCount: (state) => {
            let count = 0;
            state.notes.forEach(note => {
                count += note.content.length
            });
            return count;
        }
    },

    actions: {
        addNote(newNoteContent) {
            let note = {
                id: uuidv4(),
                content: newNoteContent,
            }
            this.notes.unshift(note);
        },

        deleteNote(id) {
            this.notes = this.notes.filter(note => note.id !== id);
        },

        updateNote(id, content) {
            // console.log(id);
            // console.log(content);
            let index = this.notes.findIndex(note => note.id === id);
            this.notes[index].content = content;
        }
    }
})