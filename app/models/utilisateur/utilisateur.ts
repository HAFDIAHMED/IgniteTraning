import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const UtilisateurModel = types
  .model("Utilisateur")
  .props({
    name : types.optional(types.string,"ahmed"),
    email : types.optional(types.string,"ahmed@gmail.com"),
    token : types.optional(types.string,"token3939393939"),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setName (value : string){
      self.name=value
    },
    setEmail (value : string){
      self.email=value
    },
    setToken (value : string){
      self.token=value
    }


  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type UtilisateurType = Instance<typeof UtilisateurModel>
export interface Utilisateur extends UtilisateurType {}
type UtilisateurSnapshotType = SnapshotOut<typeof UtilisateurModel>
export interface UtilisateurSnapshot extends UtilisateurSnapshotType {}
export const createUtilisateurDefaultModel = () => types.optional(UtilisateurModel, {})
