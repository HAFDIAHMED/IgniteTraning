import { destroy, Instance, SnapshotOut, types } from "mobx-state-tree"
import { TacheModel } from ".."

/**
 * Model description here for TypeScript hints.
 */
export const TacheStoreModel = types
  .model("TacheStore")
  .props({
    taches : types.optional(types.array(TacheModel),[{title : "task 1"}])
  })
  .views((self) => ({
    get getTaches(){
      return self.taches
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    AddTache(NewTask : any){
    //self.taches.clear(),
    self.taches.push(TacheModel.create({
      title : NewTask.title,
    }))
   
      
    },
    
  }))
   // eslint-disable-line @typescript-eslint/no-unused-vars

type TacheStoreType = Instance<typeof TacheStoreModel>
export interface TacheStore extends TacheStoreType {}
type TacheStoreSnapshotType = SnapshotOut<typeof TacheStoreModel>
export interface TacheStoreSnapshot extends TacheStoreSnapshotType {}
export const createTacheStoreDefaultModel = () => types.optional(TacheStoreModel, {})
