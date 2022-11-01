import { defineStore } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const useContestantsStore = defineStore(
    'contestants', 
    {
    state: () => ({
        contestants: [
            { name: "Yakuza 0", score: 0, img: "https://upload.wikimedia.org/wikipedia/en/b/ba/Yakuza0.jpg" },
            { name: "Yakuza Kiwami", score: 0, img: "https://upload.wikimedia.org/wikipedia/en/0/02/Yakuza_Kiwami_cover.jpg" },
            { name: "Yakuza Kiwami 2", score: 0, img: "https://upload.wikimedia.org/wikipedia/en/7/7f/Yakuza_Kiwami_2.png" },
            { name: "Yakuza 3", score: 0, img: "https://upload.wikimedia.org/wikipedia/en/6/6d/Yakuza3_boxart.jpg" },
            { name: "Yakuza 4", score: 0, img: "https://upload.wikimedia.org/wikipedia/en/b/bf/Yakuza_4_cover.jpg" },
            { name: "Yakuza 5", score: 0, img: "https://upload.wikimedia.org/wikipedia/en/b/b8/Yakuza5.jpg" },
            { name: "Yakuza 6", score: 0, img: "https://upload.wikimedia.org/wikipedia/en/9/95/Yakuza_6_cover_art.jpg" },
            { name: "Yakuza 7", score: 0, img: "https://upload.wikimedia.org/wikipedia/en/2/2f/Yakuza_like_a_dragon_cover_art.jpg" }
        ],
        nName: "",
        nImg: "",
        i: 0,
    }),
    persist: true,
    getters:  { 
        results: (state) => {
            const contestants = state.contestants.slice();
            contestants.sort((q, z) => q.score > z.score ? -1 : 1);
            return contestants; 
        },
    },
    actions: {
        addContestant(){
            let newItem = { name: this.nName, score: 0, img: this.nImg}
            this.contestants.push(newItem)
        },
        deleteContestant(contestantIndex: number){
            this.contestants.splice(contestantIndex, 1)
        },
    },
    })