import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const TacheModel = types
  .model("Tache")
  .props({
    title : types.optional(types.string,"")
  })
  .views((self) => ({
    get getTitle(){
      return self.title
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setTitle(value : string){
      self.title=value
    }

  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type TacheType = Instance<typeof TacheModel>
export interface Tache extends TacheType {}
type TacheSnapshotType = SnapshotOut<typeof TacheModel>
export interface TacheSnapshot extends TacheSnapshotType {}
export const createTacheDefaultModel = () => types.optional(TacheModel, {})
