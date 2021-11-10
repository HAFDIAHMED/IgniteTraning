import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const TacheModel = types
  .model("Tache")
  .props({
    title : types.string
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type TacheType = Instance<typeof TacheModel>
export interface Tache extends TacheType {}
type TacheSnapshotType = SnapshotOut<typeof TacheModel>
export interface TacheSnapshot extends TacheSnapshotType {}
export const createTacheDefaultModel = () => types.optional(TacheModel, {})
