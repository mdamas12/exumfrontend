<template>
  <div class="">
    <q-card class="my-card bg-primary text-white sec-category">
      <q-card-section style="border:0 0 0 0;">


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

       <div class="row justify-center" style="border: 0;">
         <!-- <div class="col- q-pa-md row items-start q-gutter-md" v-for="(category, index) in categories" :key="category.id">-->
             <div class="col- q-pa-md row items-start q-gutter-md" v-for="item in Superfamilies" :key="item.id_super_familia"> 
                <q-card class="my-card card-categories" @click="ShowSubFamilies(item.id_super_familia)" >                
                  <q-item> 
                    <div class="row">  
                        <div class="col-12 flex flex-center">            
                          <img :src="item.imagen" alt="">
                        </div>     
                        <div class="col-12 flex flex-center">  
                            <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                            <q-item-label class="tittle-cat">{{item.nombre_super_familia}}</q-item-label>
                        </div>  
                      </div>  
                  </q-item>    
                </q-card>
            </div>

   <!--         <div class="col- q-pa-md row items-start q-gutter-md"> 
             <q-btn push round @click="GotoCategories()" >
              <q-card class="my-card card-categories" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>                      
                        <img src="../../../public/images/drink.png" alt="">     
                      </q-item-section> 
                       <q-item-section>                     
                        <q-item-label class="tittle-cat">Bebidas</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
              </q-btn>
            </div>
            -->
    
        </div>
     
      </q-card-section>


    </q-card>

    <q-dialog persistent class="" v-model="showFamily" >
        <q-card class="my-card" style="max-width:100%; width:60%">
          <q-toolbar class="text-bluesito">
            <q-toolbar-title class="title-session">
                <p class="title-subcategories">Categorias de Alimentación</p>
            </q-toolbar-title>
            <q-btn flat icon="close" round v-close-popup />
          </q-toolbar>
          <q-separator />
          <q-item class="q-pt-md">
            <q-item-section>
              <div class="row q-pt-md">
                <div class="col-md-4 col-md q-px-md" v-for="family in families" :key="family.id_familia">
                  <q-card class="my-card subcategories" @click="GotoFamilies(1)" >                
                    <q-item> 
                      <div class="row">  
                        <div class="col-12">        
                          <q-item-section>
                       
                            <img :src="family.url_imagen_green" alt="">   
                          </q-item-section> 
                          <q-item-section>
                              <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                              <q-item-label class="tittle-cat">{{family.nombre_familia}}</q-item-label>
                          </q-item-section> 
                          </div>  
                        </div>  
                    </q-item>    
                  </q-card>
                </div>
      

                <!--  <div class="col-md-4 col-md q-px-md">
                  <q-card class="my-card subcategories" @click="GotoFamilies(1)" >                
                    <q-item> 
                      <div class="row">  
                        <div class="col-12">        
                          <q-item-section>
                  
                            <img src="../../../public/images/meat.png" alt="">     
                          </q-item-section> 
                          <q-item-section>
                        
                              <q-item-label class="tittle-cat">Alimentación</q-item-label>
                          </q-item-section> 
                          </div>  
                        </div>  
                    </q-item>    
                  </q-card>
                </div> -->
              </div>

            </q-item-section>
          </q-item>
    
        </q-card>
      </q-dialog>  

    
  </div>

</template>

<script lang="ts">
//import { Todo, Meta } from 'components/models';
//import ExampleComponent from 'components/OptionsComponent.vue';
import Vue from 'vue';
import { Notify } from 'quasar'
import { defineComponent } from '@vue/composition-api'
import FamiliesService from '../../services/families/families.services'
import { Loading } from "quasar";
export default defineComponent({
  name: 'categories',
  // components: { ExampleComponent },
  data() {

      return {
      Superfamilies:[],
      families:[],
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      model: "Puerto Ordaz",
      options: [
        'Campo B Ferrominera', 'Unare III', 'Los Olivos', 'Alta Vista', 'Villa Africana'
      ],
      search : "",
      categories : {},
      showFamily : false

    }
  },
  mounted () {

    this.GotoCategories();

  },
  methods: {

     GotoCategories(){

        let subscription = FamiliesService.getSuperFamilies().subscribe( {
          next: (result : any) => {
             this.Superfamilies = result
             //.log(this.Superfamilies)
            //Loading.hide()
            //this.$router.back();
          }
        });
        
         // this.showNotif("Listo para ir a categorias", 'green-10')
         // return
     },
     ShowSubFamilies(id: any){

       if ("geolocation" in navigator) {
           navigator.geolocation.getCurrentPosition(ClientPosition)
        } else {
          alert("no ok")
        }
       
       function ClientPosition(geolocationPsition:any){
         //console.log(geolocationPsition)
         let position = geolocationPsition.coords
         console.log(position)
       }
        return
        let subscription = FamiliesService.getFamilies(id).subscribe( {
          next: (result : any) => {
             this.families = result
             //console.log(this.families)    
             this.showFamily = true;
          }
        });
    

       //this.$router.push({name : 'CategoryDetail', params : {id : id}})
       //this.$router.push({name : 'families'})

     },
     ubicacion(){
       this.showNotif("ubicacion activa", 'green-10')
     },
     GotoFamilies(id: any){
        this.$router.push({name : 'families', params : {id : id}})
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

  border: 0 0 0 0;
  border-radius: 0 ;
  box-shadow: 0 0 0 rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
  height: 550px;
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
  height: 115px;
  width: 115px;
  text-align: center;
  align-items: center;
  transition: all .3s;
  cursor: pointer;
}

.card-categories:hover{
  height: 120px;
  width: 120px;
  
}


.card-categories img{
  margin: 0 auto;
  align-items: center;
}

.card-categories:hover img{

   filter: invert(0.2) sepia(1) hue-rotate(120deg) saturate(380%);
   -webkit-filter: invert(0.2) sepia(1) hue-rotate(120deg) saturate(380%);
 /* -webkit-filter:  hue-rotate(90deg);
  filter:  hue-rotate(90deg);*/
}

.tittle-cat{
  color: #66728A;
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
  color: bisque;
}

}

/* Sub-Categories*/
.subcategories{

  padding: 3% 0 0 0;
  border-radius: 50%;
  height:140px;
  width: 140px;
  text-align: center;
  align-items: center;
  transition: all .3s;
  cursor: pointer;
  margin: 7px 0;
}

.subcategories:hover{
 background-color: #68D9A9;
  
}

.title-subcategories{
  font-family: 'ProximaNovaAltRegular';
  color: #66728A;
  font-weight: 400;
  font-size: 1.3em;
  margin: 2px 0 0 0;
  text-align: center;
  
}
.subcategories img{
 
  width: 70%;
  margin: 0 auto;
  align-items: center;
}

.subcategories:hover img{
    filter: contrast(100%) grayscale(90%)
 /* -webkit-filter:  hue-rotate(90deg);
  filter:  hue-rotate(90deg);*/
}



.subcategories .tittle-cat{
  font-family: 'ProximaNovaAltRegular';
  color: #66728A;
  font-weight: 400;
  font-size: .8em;
  margin: 2px 0 0 0;
}

.subcategories:hover .tittle-cat{
 color: #fff;
}



</style>
