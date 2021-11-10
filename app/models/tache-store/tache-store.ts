import { destroy, Instance, SnapshotOut, types } from "mobx-state-tree"
import { TacheModel } from ".."

/**
 * Model description here for TypeScript hints.
 */
export const TacheStoreModel = types
  .model("TacheStore")
  .props({
    taches : types.optional(types.array(TacheModel),[])
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    AddTache(taches : any){
    //self.taches.clear(),
    self.taches.forEach(element => {
      self.taches.push(TacheModel.create({
        title : element.title,
      }))
    });
   
      
    },
    
  }))
   // eslint-disable-line @typescript-eslint/no-unused-vars

type TacheStoreType = Instance<typeof TacheStoreModel>
export interface TacheStore extends TacheStoreType {}
type TacheStoreSnapshotType = SnapshotOut<typeof TacheStoreModel>
export interface TacheStoreSnapshot extends TacheStoreSnapshotType {}
export const createTacheStoreDefaultModel = () => types.optional(TacheStoreModel, {})
