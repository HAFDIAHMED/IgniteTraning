import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { UserStore, UserStoreModel } from ".."
import { CharacterStoreModel } from "../character-store/character-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  characterStore: types.optional(CharacterStoreModel, {} as any),
  userStore : types.optional(UserStoreModel,{} as UserStore)
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
