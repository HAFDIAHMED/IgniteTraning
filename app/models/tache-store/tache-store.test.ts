import { TacheStoreModel } from "./tache-store"

test("can be created", () => {
  const instance = TacheStoreModel.create({})

  expect(instance).toBeTruthy()
})
