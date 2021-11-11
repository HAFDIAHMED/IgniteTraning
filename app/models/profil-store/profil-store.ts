import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ProfilModel } from ".."

/**
 * Model description here for TypeScript hints.
 */
export const ProfilStoreModel = types
  .model("ProfilStore")
  .props({
    profile : types.optional(types.array(ProfilModel),[])
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type ProfilStoreType = Instance<typeof ProfilStoreModel>
export interface ProfilStore extends ProfilStoreType {}
type ProfilStoreSnapshotType = SnapshotOut<typeof ProfilStoreModel>
export interface ProfilStoreSnapshot extends ProfilStoreSnapshotType {}
export const createProfilStoreDefaultModel = () => types.optional(ProfilStoreModel, {})
