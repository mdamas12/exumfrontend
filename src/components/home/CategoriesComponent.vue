<template>
  <div class="">
    <q-card class="my-card bg-primary text-white sec-category">
      <q-card-section>


        <div class="row justify-center">
          <div class="col-8">
             <p class="tittle">Compra online toda la comida, bebida y suministros que necesites</p>
           </div>
        </div>


        <div class="row justify-center">
          <div class="col- q-mr-sm"><p class="tittle-small">Entregar en </p></div>
          <div class="col-">
              <div class="q-gutter-md ">
                  <q-select class="address-select" borderless v-model="model" dropdown-icon="expand_more" :options="options" />
              </div>  
          </div>
       </div>   


       <div class="row justify-center">
         <div class="col-lg-6 col-md-6 col-sm-8  col-xs-12">
            <q-input class="search"   outlined v-model="search" label="Buscar..."  @keyup="searching()">
              <template v-slot:prepend>
                <q-icon name="search" color="#66728A" />
              </template>
            </q-input>
         </div>
       </div>

       <div class="row justify-center">
         <!-- <div class="col- q-pa-md row items-start q-gutter-md" v-for="(category, index) in categories" :key="category.id">-->
          <div class="col- q-pa-md row items-start q-gutter-md"> 
             <q-btn push round @click="GotoCategories()" >
              <q-card class="my-card card-categories" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>
                        <!--<q-img  :src="category.image"></q-img> -->
                        <img src="../../../dist/img/meat.png" alt="">     
                      </q-item-section> 
                       <q-item-section>
                          <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                          <q-item-label class="tittle-cat">Alimentación</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
              </q-btn>
            </div>

            <div class="col- q-pa-md row items-start q-gutter-md"> 
             <q-btn push round @click="GotoCategories()" >
              <q-card class="my-card card-categories" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>
                        <!--<q-img  :src="category.image"></q-img> -->
                        <img src="../../../dist/img/drink.png" alt="">     
                      </q-item-section> 
                       <q-item-section>
                          <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                          <q-item-label class="tittle-cat">Bebidas</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
              </q-btn>
            </div>

            <div class="col- q-pa-md row items-start q-gutter-md"> 
             <q-btn push round @click="GotoCategories()" >
              <q-card class="my-card card-categories" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>
                        <!--<q-img  :src="category.image"></q-img> -->
                        <img src="../../../dist/img/food.png" alt="">     
                      </q-item-section> 
                       <q-item-section>
                          <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                          <q-item-label class="tittle-cat">C.preparada</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
              </q-btn>
            </div>

            <div class="col- q-pa-md row items-start q-gutter-md"> 
             <q-btn push round @click="GotoCategories()" >
              <q-card class="my-card card-categories" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>
                        <!--<q-img  :src="category.image"></q-img> -->
                        <img src="../../../dist/img/health.png" alt="">     
                      </q-item-section> 
                       <q-item-section>
                          <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                          <q-item-label class="tittle-cat">salud y hogar</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
              </q-btn>
            </div>

           <div class="col- q-pa-md row items-start q-gutter-md"> 
             <q-btn push round @click="GotoCategories()" >
              <q-card class="my-card card-categories" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>
                        <!--<q-img  :src="category.image"></q-img> -->
                        <img src="../../../dist/img/shoes.png" alt="">     
                      </q-item-section> 
                       <q-item-section>
                          <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                          <q-item-label class="tittle-cat">retail</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
              </q-btn>
            </div>

             <div class="col- q-pa-md row items-start q-gutter-md"> 
             <q-btn push round @click="GotoCategories()" >
              <q-card class="my-card card-categories" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>
                        <!--<q-img  :src="category.image"></q-img> -->
                        <img src="../../../dist/img/exum_logo.png" alt="">     
                      </q-item-section> 
                       <q-item-section>
                          <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                          <q-item-label class="tittle-cat">exum</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
              </q-btn>
            </div>
        </div>
     
    


      </q-card-section>


      <q-separator dark />

    </q-card>

    
  </div>

</template>

<script lang="ts">
//import { Todo, Meta } from 'components/models';
//import ExampleComponent from 'components/OptionsComponent.vue';
import Vue from 'vue';
import { Notify } from 'quasar'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'categories',
  // components: { ExampleComponent },
  data() {

      return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      model: "Puerto Ordaz",
      options: [
        'Campo B Ferrominera', 'Unare III', 'Los Olivos', 'Alta Vista', 'Villa Africana'
      ],
      search : "",
      categories : {}

    }
  },
  mounted () {

  },
  methods: {

     GotoCategories(){
        
          this.showNotif("Listo para ir a categorias", 'green-10')
          return
     },
     searching () {
      if (this.search.length > 3) {
        this.showNotif("Listo para ir a ejecutar busqueda", 'green-10')
          } 
     },
     showNotif(message: string , color: string) {
          this.$q.notify({
            message: message,
            color: color,
            //avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
            actions: [
              { label: 'Ok', color: 'white', handler: () => { /* ... */ } }
            ]
          })
     },
  
  }

});

</script>
<style>
@font-face {
  font-family: ProximaNovaAltRegular;
  src: url(../../assets/fonts/FontsFree-Net-ProximaNovaAltRegular.ttf);
}

.sec-category{
  border-radius: 0 ;
  box-shadow: 0 0 0 rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
}

.tittle{
  font-family: 'ProximaNovaAltRegular';
  font-size: 3.5rem;
  text-align: center;
  line-height: 4rem;
  font-weight: 400;
  

}
.tittle-small{
  font-family: 'ProximaNovaAltRegular';
  padding: 10px 0 0 0;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 200;
  text-align: right;
  

}
.address-select{
   font-family: 'ProximaNovaAltRegular';
  font-size: 2rem;
  font-weight: 600;
  /*border-bottom: 1px solid rgba(255, 255, 255, 0.507);*/
}

.address-select span{
  color:#fff; 
}

.search{
  background-color: #fff;
  color:#939BA9;
  border-radius: 7px;
  margin:10px 0;
}

.search i{
  color: #66728A;
}

.search:hover{
  border: #66728A;
}

.card-categories{
  padding: 3% 0 0 0;
  border-radius: 50%;
  height: 130px;
  width: 130px;
  text-align: center;
  align-items: center;
  transition: all .5s;
}



.card-categories img{
  width: 70%;
  margin: 0 auto;
  align-items: center;
}

.tittle-cat{
  color: rgb(0, 0, 0);
  font-weight: 400;
  font-size: .8rem;
  margin: 2px 0 0 0;
}


@media (max-width: 768px) {
 .tittle{
  font-size: 1.5rem;
  text-align: center;
  line-height: 2rem;
  font-weight: 500;
}

.tittle-small{
  font-size: 1rem;
  text-align: right;
  font-weight: 300;
  padding: 15px 0 0 0;
}
.address-select{
  font-size: 1rem;
  width: 90%;
}
}
</style>
