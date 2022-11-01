<template>
    <!-- Выведение результатов -->
    <ul class="resultsContainer">
        <li v-for="(result, key) in results" class="results" :key="key">
            {{ result.name }}<img class="previewImg" v-bind:src="result.img" />
        </li>
        <button class="homeButton" @click="$router.push({ name: 'homePage' })">
            Go Home
        </button>
    </ul>
</template>

<script lang="ts">
import { useContestantsStore } from "../stores/contestants";

export default {
    setup() {
        const storeResults = useContestantsStore();
        return { results: storeResults.results };
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles.scss";
.resultsContainer {
    display: table;
    margin: 0 auto;
    .results {
        font-size: 20px;
        text-align: left;
        list-style-type: decimal;
        .previewImg {
            width: 35px;
            height: 35px;
            margin-left: 10px;
            margin-top: 10px;
        }
    }
    .homeButton {
        @extend %btn;
        margin-top: 20px;
        &:hover {
            @extend %btnhover;
        }
    }
}
</style>
