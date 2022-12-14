<template>
    <div class="mainContainer">
        <div
            class="progressBar"
            data-label="1"
            v-if="currentPairIndex !== pairs.length - 1"
        ></div>

        <div style="text-align: center">
            <img v-bind:src="imageLeft" width="200" height="220" class="img" />
            <img v-bind:src="imageRight" width="200" height="220" class="img" />
        </div>

        <div style="text-align: center">
            <button @click="incrementLeft()" class="leftButton">Left</button>

            <button @click="incrementRight()" class="rightButton">Right</button>
        </div>

        <div class="drawButtonContainer">
            <button @click="draw(), currentPairIndex++" class="drawButton">
                Draw
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";
import { useContestantsStore } from "../stores/contestants";

const storeContestants = useContestantsStore();

export default defineComponent({
    data() {
        return {
            pairs: [{ left: 0, right: 0 }],
            // Индекс выбранной пары в pairs[]
            currentPairIndex: 0,
        };
    },
    mounted() {
        // Формирование неповторяющихся пар
        this.pairs = [];
        for (let i = 0; i < storeContestants.contestants.length; i++) {
            for (let n = i; n < storeContestants.contestants.length; ++n) {
                if (i != n) {
                    this.pairs.push({ left: i, right: n });
                }
            }
        }
        // Перемешивание массива пар
        for (let i = this.pairs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.pairs[i];
            this.pairs[i] = this.pairs[j];
            this.pairs[j] = temp;
        }
    },
    computed: {
        // пара выбранных элементов
        leftSelection() {
            return storeContestants.contestants[
                this.pairs[this.currentPairIndex].left
            ];
        },
        rightSelection() {
            return storeContestants.contestants[
                this.pairs[this.currentPairIndex].right
            ];
        },
        // изображения
        imageLeft() {
            return storeContestants.contestants[
                this.pairs[this.currentPairIndex].left
            ].img;
        },
        imageRight() {
            return storeContestants.contestants[
                this.pairs[this.currentPairIndex].right
            ].img;
        },
        // прогресс
        progress() {
            return ((this.currentPairIndex + 1) / (this.rounds - 1)) * 100;
        },
        // число раундов
        rounds(): number {
            return (
                (storeContestants.contestants.length *
                    (storeContestants.contestants.length - 1)) /
                2
            );
        },
    },
    methods: {
        // Присуждение победы и увеличение очков
        incrementLeft() {
            storeContestants.contestants[
                this.pairs[this.currentPairIndex].left
            ].score =
                storeContestants.contestants[
                    this.pairs[this.currentPairIndex].left
                ].score + 3;
            this.nextRound();
        },
        incrementRight() {
            storeContestants.contestants[
                this.pairs[this.currentPairIndex].right
            ].score =
                storeContestants.contestants[
                    this.pairs[this.currentPairIndex].right
                ].score + 3;
            this.nextRound();
        },
        // Ничья
        draw() {
            storeContestants.contestants[this.pairs[this.currentPairIndex].left]
                .score++;
            storeContestants.contestants[
                this.pairs[this.currentPairIndex].right
            ].score++;
            this.nextRound();
        },
        // Переход к следующему раунду
        nextRound() {
            this.currentPairIndex++;
        },
    },
    watch: {
        currentPairIndex(newPair) {
            if (newPair == this.pairs.length - 1) {
                router.push({ name: "resultsPage" });
            }
        },
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles.scss";

.mainContainer {
    .leftButton {
        @extend %btn;
        &:hover {
            @extend %btnhover;
        }
    }
    .rightButton {
        @extend %btn;
        &:hover {
            @extend %btnhover;
        }
    }
    .drawButtonContainer {
        text-align: center;
        .drawButton {
            @extend %btn;
            &:hover {
                @extend %btnhover;
            }
        }
    }
    .img {
        border: 5px solid #282828;
        vertical-align: middle;
        margin: 5px;
        margin-bottom: 10px;
    }
    .progressBar {
        position: relative;
        background-color: #282828;
        width: 410px;
        height: 10px;
        padding: 0;
        margin: auto;
        margin-bottom: 10px;
        display: block;
    }
    .progressBar::before {
        content: attr(data-label);
        position: absolute;
        background-color: #ccff90;
        height: 10px;
        width: v-bind('progress + "%"');
        max-width: calc(100% - 1em);
        padding: 1em;
        font-size: 0pt;
    }
}
</style>
