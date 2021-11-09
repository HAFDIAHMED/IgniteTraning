import { TacheModel } from "./tache"

test("can be created", () => {
  const instance = TacheModel.create({})

  expect(instance).toBeTruthy()
})
