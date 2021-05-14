<template>
  <q-page>
    <!-- <header-component></header-component> -->
    <categories-component></categories-component>
    <supplier-component></supplier-component>
  </q-page>
</template>

<script lang="ts">
//import { Todo, Meta } from 'components/models';
//import ExampleComponent from 'components/OptionsComponent.vue';
import { defineComponent } from '@vue/composition-api'
import CategoriesComponent from 'components/home/CategoriesComponent.vue'
import SupplierComponent from 'components/home/SupplierComponent.vue'
import Vue from 'vue';
import { Notify } from 'quasar'
export default defineComponent({
  name: 'PageIndex',
  components: { CategoriesComponent,SupplierComponent }
 
});

</script>
