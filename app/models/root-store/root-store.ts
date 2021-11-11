import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ProfilModel, TacheModel, TacheStore, TacheStoreModel, UserModel, UserStore, UserStoreModel } from ".."
import { CharacterStoreModel } from "../character-store/character-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
   characterStore: types.optional(CharacterStoreModel, {} as any),
   //ProfileStore : types.optional(UserStoreModel,{} )
   //tacheStore : types.optional(TacheStoreModel,{}),
  //tacheExample : types.optional(TacheModel,{})
  profilesStore : types.optional(ProfilModel,{}as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
