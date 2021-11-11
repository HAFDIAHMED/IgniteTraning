import { ProfilModel } from "./profil"

test("can be created", () => {
  const instance = ProfilModel.create({})

  expect(instance).toBeTruthy()
})
