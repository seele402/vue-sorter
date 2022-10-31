<template>
    <!-- Выведение результатов -->
    <ul class="resultsContainer">
    <li v-for="result in results" class="results">{{result.name}}</li>
    </ul>
</template>

<script lang="ts">
import { useContestantsStore } from '../stores/contestants'



export default{
  setup(){
    const storeResults = useContestantsStore()
    return { results: storeResults.results}
  }

}


</script>

<style>
.resultsContainer{
  display: table;
  margin: 0 auto;
}
.results{
  font-size: 20px;
  text-align: left;
  list-style-type: decimal;
}
</style>
