import { GeneralApiProblem } from "./api-problem"
import { Character } from "../../models/character/character"
import { string } from "mobx-state-tree/dist/internal"

export interface User {
  id: number
  name: string
}
export interface ProfileTest {
  name : string 
  job : string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem
export type ProfilesApi={ profil : ProfileTest} | GeneralApiProblem
export type ProfiUser = {name : string, job : string } | GeneralApiProblem
export type GetCharactersResult = { kind: "ok"; characters: Character[] } | GeneralApiProblem
export type GetCharacterResult = { kind: "ok"; character: Character } | GeneralApiProblem
