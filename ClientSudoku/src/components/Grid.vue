<template>  
   <ion-buttons>
        <template v-for="(number, index) in GridList" :key="index">
            <square-cell :InitialValue="number"></square-cell>
        </template>
   </ion-buttons>
</template>

<script>
import { IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import SquareCell from "./square.vue"
import GridListFile from "../../public/assets/grid.txt"

export default defineComponent({
  name: 'GridSudoku',
  props: ["GridId"],
  components: {
    IonButtons,
    SquareCell,
  },
  data() {
    return {
        gridList: GridListFile
    }
  },
  mounted() {
    console.log({ GridListFile })
  },
});

</script>

<style scoped>

</style>