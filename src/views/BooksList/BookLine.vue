<template>
    <v-list-group append-icon="" class="px-0" v-if="book">
        <template #activator>
            <v-list-item class="px-0 py-2">
                <v-row no-gutters style="height: 80px">
                    <v-col
                        cols="6"
                        style="text-wrap: normal; overflow-wrap: break-word"
                        class="px-4"
                    >
                        <v-list-item-title
                            class="py-1 font-weight-medium text-left"
                            style="
                                text-overflow: initial;
                                white-space: break-spaces;
                            "
                            >{{ book.getName() }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-left">
                            {{ book.getAuthor() }}
                        </v-list-item-subtitle>
                        <v-list-item-subtitle
                            class="py-1 font-weight-bold"
                        ></v-list-item-subtitle>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center text-center">
                        <v-list-item-subtitle class="py-1 font-weight-bold">{{
                            book.getYear()
                        }}</v-list-item-subtitle>
                    </v-col>
                    <v-col
                        cols="2"
                        class="d-flex align-center text-center px-4"
                    >
                        <v-list-item-subtitle class="py-1 font-weight-bold">
                            {{ book.getRating() }}/10
                        </v-list-item-subtitle>
                    </v-col>
                    <v-col
                        cols="2"
                        class="d-flex flex-column align-center text-center px-4"
                    >
                        <template
                            v-for="(item, idx) in book
                                .getBuyOn()
                                .filter((l) => !!l)"
                        >
                            <a
                                :key="'item_' + idx"
                                :href="
                                    book.buyOnMap[item].URL +
                                    '/' +
                                    book.getCode()
                                "
                                >{{ book.buyOnMap[item].name }}</a
                            >
                        </template>
                    </v-col>
                </v-row>
            </v-list-item>
        </template>
        <v-divider light style="width: 50%" class="ma-auto"></v-divider>
        <v-list-item
            v-if="book.getDesc() && book.getDesc().length"
            class="px-3"
        >
            <v-list-item-content
                class="px-3 text-left"
                v-html="book.getDesc()"
            />
        </v-list-item>
    </v-list-group>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/composition-api";
    import Book from "../../models/Book";

    export default defineComponent({
        name: "BookLine",

        props: {
            book: {
                type: Book,
                required: true,
            },
        },
        setup() {
            return {};
        },
    });
</script>

<style>
    .v-list-group__header {
        padding-left: 0;
        padding-right: 0;
    }
</style>
