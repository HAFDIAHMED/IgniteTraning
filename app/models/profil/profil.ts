import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { Api } from "../../services/api"

/**
 * Model description here for TypeScript hints.
 */
export const ProfilModel = types
  .model("Profil")
  .props({
    
    name : types.optional(types.string, "name "),
    job : types.optional(types.string, "job ")
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
      fetchProfile : flow (function * (){
            
      })
  })
  )
  
   
  
  // eslint-disable-line @typescript-eslint/no-unused-vars

type ProfilType = Instance<typeof ProfilModel>
export interface Profil extends ProfilType {}
type ProfilSnapshotType = SnapshotOut<typeof ProfilModel>
export interface ProfilSnapshot extends ProfilSnapshotType {}
export const createProfilDefaultModel = () => types.optional(ProfilModel, {})
