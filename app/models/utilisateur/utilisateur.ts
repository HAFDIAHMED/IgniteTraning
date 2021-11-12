import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
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
    password : types.optional(types.string,"1111")
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
    }


  }))
  .actions((self)=>({
    login : flow(function * (email1 : string , password1 : string)
    {
      const api = new Api()
      api.setup()
      yield api.Login(email1, password1).then((response : any)=>{

        //console.log("response")
        if (response.status===200){
          self.setToken(response.token)
        }
      })
    }
    )

  }))
  // eslint-disable-line @typescript-eslint/no-unused-vars

type UtilisateurType = Instance<typeof UtilisateurModel>
export interface Utilisateur extends UtilisateurType {}
type UtilisateurSnapshotType = SnapshotOut<typeof UtilisateurModel>
export interface UtilisateurSnapshot extends UtilisateurSnapshotType {}
export const createUtilisateurDefaultModel = () => types.optional(UtilisateurModel, {})
