import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ProductModel = types
  .model("Product")
  .props({
      id : types.identifierNumber,
      name : types.string,
      cost : types.number,
      quantity : types.number,
      location: types.number,
      familyId : types.number,
  })
  .views((self) => ({
    get getId (){
      return self.id
    },
    get getName(){
      return self.name
    },
    get getCost (){
      return self.cost
    },
    get getQuantity (){
      return self.quantity
    },
    get getLocation (){
      return self.location
    },
    get getFamilyId(){
      return self.familyId
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setId(value : number){
      self.id=value
    },
    setName(value : string){
      self.name=value
    },
    setCost(value : number){
      self.cost=value
    },
    setQuantity(value : number){
      self.quantity=value
    },
    setLocation(value : number){
      self.location=value
    },
    setFamilyId(value : number){
      self.familyId=value
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type ProductType = Instance<typeof ProductModel>
export interface Product extends ProductType {}
type ProductSnapshotType = SnapshotOut<typeof ProductModel>
export interface ProductSnapshot extends ProductSnapshotType {}
export const createProductDefaultModel = () => types.optional(ProductModel, {})
