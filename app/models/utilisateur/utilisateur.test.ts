import { UtilisateurModel } from "./utilisateur"

test("can be created", () => {
  const instance = UtilisateurModel.create({})

  expect(instance).toBeTruthy()
})
