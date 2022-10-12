<template>  
  <div class="flexbox">
   <ion-buttons>
      <div v-for="(col, idxcol) in this.gridList" :key="idxcol">
        <div v-for="(number, idxrow) in col" :key="idxrow">
          <square-cell v-bind:class="{'pad-side': idxcol % 3 === 0 && idxcol !== 0, 'pad-top': idxrow % 3 === 0 && idxrow !== 0}"  v-bind:value="number"></square-cell>
        </div>
      </div>
   </ion-buttons>
   <ion-button @click="solve()">Solve</ion-button>
  </div>
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
        gridList: ["310004069","000000200","008005040","000000005","006000017","807030000","590700006","600003050","000100002"]
    }
  },
  methods: {
    solve() {
      let stringGrid = '';
      this.gridList.forEach(element => {
        stringGrid += element;
      });
      const solver = new Solver(stringGrid);
      const solved = solver.solve()
      let newGrid = []
      for(let i=0; i < 9; i++) { newGrid.push(solved.substring(9 * i, 9 * (i+1))) }
      this.gridList = newGrid
    }
  }
});

</script>

<style scoped>
.flexbox{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pad-side{
  margin-left: 0.3em;
}
.pad-top{
  margin-top: 0.3em;
}
</style>