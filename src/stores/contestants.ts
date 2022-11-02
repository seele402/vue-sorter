import { defineStore } from "pinia";
export type FileEventTarget = EventTarget & { files: FileList };
export const useContestantsStore = defineStore("contestants", {
  state: () => ({
    contestants: [
      {
        name: "",
        score: 0,
        img: "",
      },
    ],
  }),
  persist: true,
  getters: {
    results: (state) => {
      const contestants = state.contestants.slice();
      contestants.sort((q, z) => (q.score > z.score ? -1 : 1));
      return contestants;
    },
  },
  actions: {
    addContestant() {
      const newItem = { name: "", score: 0, img: "" };
      this.contestants.push(newItem);
    },
    deleteContestant(contestantIndex: number) {
      this.contestants.splice(contestantIndex, 1);
    },
    exportList() {
      const list = JSON.stringify(this.contestants);
      this.download(list, "constestants.json", "text/plain");
    },
    download(content: string, fileName: string, contentType: string) {
      const a = document.createElement("a");
      const file = new Blob([content], { type: contentType });
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    },
    importList(e: Event) {
      const target = e.target as FileEventTarget;
      const { files } = target;
      if (!files.length) return;
      console.log(e);
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e);
        this.contestants = JSON.parse(reader.result as string);
        window.location.reload();
      };
      reader.readAsText(files[0]);
    },
  },
});
