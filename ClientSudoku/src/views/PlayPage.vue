<template>
  <base-page>  
    <ion-content :fullscreen="true">
      <div class="main-content">
        <div class="container">
          <grid-sudoku id="grid"></grid-sudoku>
        </div>
        <div class="container">
          <p>number pad</p>
        </div>
      </div>
    </ion-content>
  </base-page>
</template>

<script>
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import BasePage from "./BasePageLayout.vue"
import GridSudoku from "../components/Grid.vue"

export default defineComponent({
  name: 'PlayPage',
  components: {
    IonContent,
    BasePage,
    GridSudoku
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}
#grid{
  border: 2px;
  border-color: black;
  border-style: solid;
}
.main-content{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

</style>