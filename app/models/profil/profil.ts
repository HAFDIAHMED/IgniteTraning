import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ProfilModel = types
  .model("Profil")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type ProfilType = Instance<typeof ProfilModel>
export interface Profil extends ProfilType {}
type ProfilSnapshotType = SnapshotOut<typeof ProfilModel>
export interface ProfilSnapshot extends ProfilSnapshotType {}
export const createProfilDefaultModel = () => types.optional(ProfilModel, {})
