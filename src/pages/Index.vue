<template>
  <div class="">
    <q-card class="my-card bg-primary text-white">
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
         <div class="col-6">
            <q-input class="search"   outlined v-model="search" label="Buscar...">
              <template v-slot:prepend>
                <q-icon name="search" color="#66728A" />
              </template>
            </q-input>
         </div>
       </div>

       <div class="row justify-center">
          <div class="col- q-pa-md row items-start q-gutter-md" v-for="(category, index) in categories" :key="category.id">
             <q-btn push round @click="GotoCategories()" >
              <q-card class="my-card card-categories" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>
                        <q-img  :src="category.image"></q-img> 
                      </q-item-section> 
                       <q-item-section>
                          <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
              </q-btn>
            </div>
        </div>
     
    


      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    
  </div>

</template>

<script lang="ts">
//import { Todo, Meta } from 'components/models';
//import ExampleComponent from 'components/OptionsComponent.vue';
import Vue from 'vue';
import { Notify } from 'quasar'
export default Vue.extend({
  name: 'PageIndex',
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
    const cat = [
         {
           id : 1,
           name : "Alimentación", 
           image : "dist/img/meat.png"
         },
         {
           id : 2,
           name : "Bebidas",
           image : "http://localhost:8080/src/assets/images/meat.png"
         },
          {
           id : 3,
           name : "C.Preparada",
           image : "http://localhost:8080/src/assets/images/meat.png"
         },
          {
           id : 4,
           name : "Salud y Hogar",
           image : "http://localhost:8080/src/assets/images/meat.png"
         },
          {
           id : 5,
           name : "Retail",
           image :"http://localhost:8080/src/assets/images/meat.png"
          },
         {
           id : 5,
           name : "Exum",
           image :"http://localhost:8080/src/assets/images/meat.png"
         }
           
      ]

      this.categories = cat
      console.log(this.categories)
  },
  methods: {

     GotoCategories(){
        
          this.showNotif("Listo para ir a categorias", 'red-10')
          return
     },
      showNotif(message: string , color: string) {
          this.$q.notify({
            message: message,
            color: color,
            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
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
  src: url(../assets/fonts/FontsFree-Net-ProximaNovaAltRegular.ttf);
}

.tittle{
  font-family: 'ProximaNovaAltRegular';
  font-size: 3.5rem;
  text-align: center;
  line-height: 4rem;
  font-weight: 400;
  

}
.tittle-small{
  font-size: 2rem;
  text-align: center;
  font-weight: 300;
  text-align: right;

}
.address-select{
  font-size: 2rem;
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
  height: 150px;
  width: 150px;
  text-align: center;
  align-items: center;
  transition: all .5s;
}

.card-categories-hover{
  height: 148px;
  width: 148px;
}

.card-categories img{
  width: 70%;
  margin: 0 auto;
  align-items: center;
}

.tittle-cat{
  color: #000;
  font-weight: 400;
  font-size: .8rem;
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
