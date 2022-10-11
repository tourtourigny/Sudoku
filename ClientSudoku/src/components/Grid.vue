<template>  
   <ion-buttons>
      <div v-for="(col, idxcol) in this.gridList" :key="idxcol">
        <div v-for="(number, idxrow) in col[0]" :key="idxrow">
          <square-cell v-bind:class="{'pad-side': idxcol % 3 === 0 && idxcol !== 0, 'pad-top': idxrow % 3 === 0 && idxrow !== 0}"  :InitialValue="number"></square-cell>
        </div>
      </div>
   </ion-buttons>
   <ion-button @click="solve()">Solve</ion-button>
</template>

<script>
import { IonButtons, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import SquareCell from "./square.vue"
import Solver from "../services/solver.js"

export default defineComponent({
  name: 'GridSudoku',
  components: {
    IonButtons,
    IonButton,
    SquareCell,
  },
  data() {
    return {
        gridList: [["310004069"],["000000200"],["008005040"],["000000005"],["006000017"],["807030000"],["590700006"],["600003050"],["000100002"]]
    }
  },
  methods: {
    solve() {
      let stringGrid = '';
      this.gridList.forEach(element => {
        stringGrid += element;
      });
      const solver = new Solver(stringGrid);
      console.log(solver.solve())
      return;
    }
  }
});

</script>

<style scoped>
.pad-side{
  margin-left: 0.3em;
}
.pad-top{
  margin-top: 0.3em;
}
</style>