<template>
 <div>
  <div class="q-pa-md row justify-center q-gutter-md">
    <div class="col-11">
    <q-card class="my-card app" flat bordered >
        <div class="row">
            <div class="col-1"></div>
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 ">
               
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pt-xs">
                        <div class="text-overline"></div>
                        <div class=" text-h5 app-tittle q-mt-sm q-mb-xs">Descargate la app de Exum</div>
                        <div class="app-message">
                            Accede a las tiendas de tus proveedores de confianza, llena la cesta online y haz tu pedido con tus tarifas personalizadas.
                        </div>
                    </div>

                    <q-card-section horizontal class="links">
                        <q-img  class="img-link" src="../../../public/images/apple.png" />
                        <q-img  class="img-link" src="../../../public/images/google.png" />
                    </q-card-section>

        
               
            </div>
            <div class="col-lg-5 col-md-6 col-sm-7 col-xs-12">
                <div class="row content-phone">
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-11 ">
                        <img class="phone" src="../../../public/images/iphoneX.png" alt="" >  
                    </div>
                </div>
            </div>

        </div>
       
    </q-card>

    </div>
  </div>  
  
 </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({

    name: 'Exum-App',
    data() {
        return {
            
        }
        
    },
    
})
</script>
<style>
@font-face {
  font-family: ProximaNovaAltRegular;
  src: url(../../assets/fonts/FontsFree-Net-ProximaNovaAltRegular.ttf);
}
.app{

    background: #F7F8FA;
    border-radius: 10px;
    padding: 20px 30px ;
    margin-top: 50px;
    height: 400px;
    margin-bottom: 40px;
   
}
.app-tittle{
  font-family: 'ProximaNovaAltRegular';
  font-size: 3rem;
  text-align: center;
  line-height: 4rem;
  font-weight: 600;
  color: #3A455B;
  text-align: left;
}
.app-message{
  font-family: 'ProximaNovaAltRegular';
  font-size: 1rem;
  text-align: center;
  font-weight: 200;
  color: #3A455B;
  text-align: left;
}
.links{
    margin: 10px 0px;
}
.btn-app{
    
    margin: 10px 0px;
    cursor: pointer;
    transition: all .5s;
}
.btn-app:hover{
    opacity: .9;

}

.content-phone{
    justify-content: center;
 
}
.phone{
    width: 293px;
    height: 490px;
     z-index: 10;
    -webkit-transform: translate(0%, -14%);
    -ms-transform: translate(0%, -14%);
}

.btn-store{
  image-rendering: auto;
}

 @media (max-width: 1024px) {

    .app{

        height: 320px;
    }

    .content-phone{
        justify-content: center;
    }

    .phone{
        width: 250px;
        height: 405px;
       -webkit-transform: translate(0%, -16%);
       -ms-transform: translate(0%, -16%);
    }

    .app-tittle{
        font-size: 2rem;
        line-height: 2rem;
    }

    .app-message{
        font-size: 1rem;   
    }

 }

 @media (max-width: 768px) {

    .app{
        height: auto;
    }
    .phone{
        width: 200px;
        height: 320px;
       -webkit-transform: translate(0%, 0%);
       -ms-transform: translate(0%, 0%);
    }

   

    .app-tittle{
        font-size: 1.7rem;
        line-height: 2rem;
    }

    .app-message{
        font-size: .7rem;   
    }
 }

  @media (max-width: 425px) {

    .app{
        height: auto;
     }
    .phone{
        width: 200px;
        height: 330px;
       -webkit-transform: translate(0%, 0%);
       -ms-transform: translate(0%, 0%);
    }
  }


</style>