import { createRouter, createWebHistory } from "vue-router";
import ViewNotes from '../views/ViewNotes.vue';
import ViewStats from '../views/ViewStats.vue';
import ViewEditNote from '../views/ViewEditNote.vue';


const routes = [
    {
        path: '/',
        name: 'notes',
        component: ViewNotes,
    },
    {
        path: '/stats',
        name: 'stats',
        component: ViewStats,
    },
    {
        path: '/editNote/:id',
        name: 'edit-note',
        component: ViewEditNote,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;

