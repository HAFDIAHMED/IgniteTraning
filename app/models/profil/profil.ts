import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { Api } from "../../services/api"

/**
 * Model description here for TypeScript hints.
 */
export const ProfilModel = types
  .model("Profil")
  .props({
    id : types.optional(types.identifierNumber,0),
    name : types.optional(types.string, "name ")
  })
  .views((self) => ({
    get getId (){
      return self.id
    },
    get getName (){
      return self.name
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setId( value : number){
      self.id=value
    },
    setName (value : string){
      self.name=value
    }
  })) 
  
   
  
  // eslint-disable-line @typescript-eslint/no-unused-vars

type ProfilType = Instance<typeof ProfilModel>
export interface Profil extends ProfilType {}
type ProfilSnapshotType = SnapshotOut<typeof ProfilModel>
export interface ProfilSnapshot extends ProfilSnapshotType {}
export const createProfilDefaultModel = () => types.optional(ProfilModel, {})
