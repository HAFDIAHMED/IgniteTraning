import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const UtilisateurModel = types
  .model("Utilisateur")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type UtilisateurType = Instance<typeof UtilisateurModel>
export interface Utilisateur extends UtilisateurType {}
type UtilisateurSnapshotType = SnapshotOut<typeof UtilisateurModel>
export interface UtilisateurSnapshot extends UtilisateurSnapshotType {}
export const createUtilisateurDefaultModel = () => types.optional(UtilisateurModel, {})
