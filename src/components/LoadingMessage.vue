<template>
    <v-card class="d-block pa-4 ma-4">
        <v-progress-circular indeterminate :size="100"> </v-progress-circular>
        <v-card-subtitle>{{ label }}</v-card-subtitle>
    </v-card>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/composition-api";

    export default defineComponent({
        name: "LoadingMessage",
        props: {
            label: {
                type: String,
                default: "Loading...",
            },
        },
    });
</script>

<style scoped></style>
