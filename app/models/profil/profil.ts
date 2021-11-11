import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { Api } from "../../services/api"

/**
 * Model description here for TypeScript hints.
 */
export const ProfilModel = types
  .model("Profil")
  .props({
    
    name : types.optional(types.string,""),
    job : types.optional(types.string, "j")
  })
  .views((self) => ({
    get getJob (){
      return self.job
    },
    get getName (){
      return self.name
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setJob( value : string){
      self.job=value
    },
    setName (value : string){
      self.name=value
    }
  })) 
  .actions((self)=> ({
      getProfile : flow (function * (){
       
          const api = new Api()
          api.setup()

          yield api.fetchProfils().then((response : any)=>{
            self.setJob(response.profil.job)
            self.setName(response.profil.name)
          })
          
      })
  })
  )
  
   
  
  // eslint-disable-line @typescript-eslint/no-unused-vars

type ProfilType = Instance<typeof ProfilModel>
export interface Profil extends ProfilType {}
type ProfilSnapshotType = SnapshotOut<typeof ProfilModel>
export interface ProfilSnapshot extends ProfilSnapshotType {}
export const createProfilDefaultModel = () => types.optional(ProfilModel, {})
