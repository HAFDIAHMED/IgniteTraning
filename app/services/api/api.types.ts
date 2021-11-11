import { GeneralApiProblem } from "./api-problem"
import { Character } from "../../models/character/character"
import { Profil } from "../../models/profil/profil"

export interface User {
  id: number
  name: string
}
export interface Person {
  name : string 
  job : string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem
export type ProfilesApi={ kind : "ok"; profil : Person} | GeneralApiProblem
export type GetCharactersResult = { kind: "ok"; characters: Character[] } | GeneralApiProblem
export type GetCharacterResult = { kind: "ok"; character: Character } | GeneralApiProblem
