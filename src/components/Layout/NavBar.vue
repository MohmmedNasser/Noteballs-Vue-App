<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-success">
            <div class="container">
                <router-link class="navbar-brand text-white" to="/">Noteballs</router-link>
                <button class="navbar-toggler p-1 border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <svg width="32" height="32" viewBox="0 0 24 24">
                        <path fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" d="M3 5h8m-8 7h13M3 19h18" />
                    </svg>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item mx-2">
                            <router-link class="nav-link text-white" to="/" exact>Notes</router-link>
                        </li>
                        <li class="nav-item mx-2">
                            <router-link to="/stats" class="nav-link text-white">Stats</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar-nav .nav-link {
    border-radius: 5px;
}

.navbar-nav .nav-link.router-link-active,
.navbar-nav .show>.nav-link {
    background: rgba(255, 255, 255, 0.1);
}

.navbar-toggler {
    outline: none !important;
    box-shadow: none !important;
}

@media (max-width: 991px) {
    .navbar-nav {
        margin: 15px 0;

        .nav-link {
            padding: 10px 15px;
        }
    }
}
</style>
