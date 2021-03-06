import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { ProductModel } from ".."
import { Api } from "../../services/api"

/**
 * Model description here for TypeScript hints.
 */
export const UtilisateurModel = types
  .model("Utilisateur")
  .props({
    name : types.optional(types.string,"ahmed"),
    email : types.optional(types.string,"ahmed@gmail.com"),
    token : types.optional(types.string,"token3939393939"),
    password : types.optional(types.string,"1111"),
    products : types.optional(types.array(ProductModel),[])
  })
  .views((self) => ({
   get  getName ( ){
      return self.name
    },
   get getEmail (){
     return self.email
   },
   get getToken(){
     return self.token
   },
   get getPassword(){
     return self.password
   },
   get getProducts (){
     return self.products
   }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setName (value : string){
      self.name=value
    },
    setEmail (value : string){
      self.email=value
    },
    setToken (value : string){
      self.token=value
    },
    setPassword (value : string ){
      self.password=value
    },
    setProducts (value : any){
      self.products=value
    }


  }))
  .actions((self)=>({
    login : flow(function * (email : string , password : string)
    {
      const api = new Api()
      api.setup()
      yield api.Login(email, password).then((response : any)=>{
        //console.log(response)
        self.setToken(response.token)
      })
    }
    ),
    GetProd : flow (function * (token : string){
      const api= new Api()
      api.setup()
      yield api.getUtilisateurProd(token).then((response: any)=>{
        console.log("response")
        //self.setProducts(response)
      })
    })

  }))
  // eslint-disable-line @typescript-eslint/no-unused-vars

type UtilisateurType = Instance<typeof UtilisateurModel>
export interface Utilisateur extends UtilisateurType {}
type UtilisateurSnapshotType = SnapshotOut<typeof UtilisateurModel>
export interface UtilisateurSnapshot extends UtilisateurSnapshotType {}
export const createUtilisateurDefaultModel = () => types.optional(UtilisateurModel, {})
