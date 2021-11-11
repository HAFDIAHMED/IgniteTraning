import { ProfilStoreModel } from "./profil-store"

test("can be created", () => {
  const instance = ProfilStoreModel.create({})

  expect(instance).toBeTruthy()
})
