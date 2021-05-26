import { Observable } from 'rxjs'
import axios from 'axios'

// const API_URL = 'http://localhost:8000/' // process.env.API_URL+'/v1/';
const API_URL = 'https://dev.exumapp.com/public/api/'

//const API_URL = process.env.API_URL + 'web/home/';

class FamiliesService {
  getSuperFamilies () {
    return Observable.create((observer) => {
      // api.get(API_URL + 'categories-featured/')
      axios.get(API_URL+'superfamilias/')
        .then((response) => {
         // console.log(response.data.superfamilias)
          observer.next(response.data.superfamilias)
         //observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }
  getFamilies (id) {
     return Observable.create((observer) => {
       axios.get(API_URL+`superfamilias/${id}/`)
         .then((response) => {
           //console.log(response.data.superfamilia.familias)
           observer.next(response.data.superfamilia.familias)
           observer.complete()
         })
         .catch((error) => {
           observer.error(error)
         })
     })
   }
  /*getListCategories () {
    console.log("seeee")
    return Observable.create((observer) => {
      axios.get(API_URL + 'categories-all/')
        .then((response) => {
          console.log("seeee",response)
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          console.log("nooooo",error)
          observer.error(error)
        })
    })
  }*/
}

export default new FamiliesService()
