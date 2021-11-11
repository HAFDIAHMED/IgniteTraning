import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { Api } from "../../services/api"

/**
 * Model description here for TypeScript hints.
 */
export const ProfilModel = types
  .model("Profil")
  .props({
    
    name : types.optional(types.string, "name 1"),
    job : types.optional(types.string, "job  1")
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
            self.setJob(response.job)
            self.setName(response.name)
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
