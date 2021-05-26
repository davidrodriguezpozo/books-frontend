<template>
    <v-app>
        <v-main>
            <books-list class="full-page"/>
        </v-main>
    </v-app>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/composition-api";
    import BooksList from "@/views/BooksList.vue";

    export default defineComponent({
        name: "App",
        components: {
            BooksList,
        },
        setup() {
            return {};
        },
    });
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    .full-page {
        flex: 1;
        height: 100vh;
        overflow-y: auto;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
