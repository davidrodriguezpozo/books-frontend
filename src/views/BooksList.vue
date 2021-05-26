<template>
    <v-card class="d-flex flex-column" style="width: 100%">
        <v-card-title class="pa-0 flex-1">
            <v-card-title> Books list </v-card-title>
        </v-card-title>
        <v-divider></v-divider>
        <v-list
            v-if="!booksList.isLoadingList() && booksList.list.length"
            class="pa-0 flex-column overflow-y-auto flex-1"
            style="height: 100%"
        >
            <v-list-item>
                <!-- HEader of the list -->
                <v-row no-gutter>
                    <v-col cols="6" class="text-left">Book Title</v-col>
                    <v-col cols="2" class="text-center"> Publish year</v-col>
                    <v-col cols="2" class="text-center">Rating</v-col>
                    <v-col cols="2" class="text-center">Buy on</v-col>
                </v-row>
            </v-list-item>
            <template v-for="(book, idx) in booksList.list">
                <book-line
                    :style="idx % 2 === 0 ? 'background-color: #fffde7' : ''"
                    :book="book"
                    :key="'book_' + idx"
                ></book-line>
                <v-divider v-if="idx !== booksList.list.length"></v-divider>
            </template>
        </v-list>
        <v-card-text v-else-if="!booksList.isLoadingList()">
            <v-card-title class="justify-center">
                There are no books
            </v-card-title>
        </v-card-text>
        <loading-message label="Loading books..." v-else></loading-message>
        <v-spacer></v-spacer>
        <v-divider></v-divider>
        <div
            class="text-center"
            v-if="booksList.list.length"
            style="bottom: 0; position: relative"
        >
            <v-pagination
                v-model="booksList.page"
                total-visible="10"
                :length="booksList.getTotalBooks()"
            ></v-pagination>
        </div>
    </v-card>
</template>

<script lang="ts">
    import {
        defineComponent,
        onMounted,
        Ref,
        ref,
        watch,
    } from "@vue/composition-api";
    import BooksList from "@/models/BooksList";
    import BookLine from "@/views/BooksList/BookLine.vue";
    import LoadingMessage from "@/components/LoadingMessage.vue";
    export default defineComponent({
        name: "BooksList",
        components: {
            BookLine,
            LoadingMessage,
        },
        setup() {
            const booksList: Ref<BooksList> = ref(new BooksList());

            onMounted(async () => {
                await booksList.value.loadList();
            });

            watch(
                () => booksList.value.page,
                async () => {
                    await booksList.value.loadList();
                }
            );

            return {
                booksList,
            };
        },
    });
</script>

<style scoped></style>
