<template>
  <q-page>
    <header-component></header-component> 
    <categories-component></categories-component>
    <supplier-component></supplier-component>
    <app-component></app-component>
    <profile-component></profile-component>
    <partner-component></partner-component>
    <footer-component></footer-component>
  </q-page>
</template>

<script lang="ts">
//import { Todo, Meta } from 'components/models';
//import ExampleComponent from 'components/OptionsComponent.vue';
import { defineComponent } from '@vue/composition-api'
import HeaderComponent from 'components/home/HeaderComponent.vue'
import CategoriesComponent from 'components/home/CategoriesComponent.vue'
import SupplierComponent from 'components/home/SupplierComponent.vue'
import AppComponent from 'components/home/AppComponent.vue'
import ProfileComponent from 'components/home/ProfileComponent.vue'
import PartnerComponent from 'components/home/PartnerComponent.vue'
import FooterComponent from 'components/home/FooterComponent.vue'
import Vue from 'vue';
import { Notify } from 'quasar'
export default defineComponent({
  name: 'PageIndex',
  components: {HeaderComponent, CategoriesComponent,SupplierComponent,AppComponent,ProfileComponent,PartnerComponent, FooterComponent }
 
});

</script>
