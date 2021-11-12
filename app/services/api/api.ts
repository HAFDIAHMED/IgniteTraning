import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"
import { useState } from "react"
import { ProfilModel } from "../../models"

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  /**
   * Gets a list of users.
   */
  async getUsers(): Promise<Types.GetUsersResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/users`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    const convertUser = (raw) => {
      return {
        id: raw.id,
        name: raw.name,
      }
    }

    // transform the data into the format we are expecting
    try {
      const rawUsers = response.data
      const resultUsers: Types.User[] = rawUsers.map(convertUser)
      return { kind: "ok", users: resultUsers }
    } catch {
      return { kind: "bad-data" }
    }
  }

  /**
   * Gets a single user by ID
   */

  async getUser(id: string): Promise<Types.GetUserResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/users/${id}`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const resultUser: Types.User = {
        id: response.data.id,
        name: response.data.name,
      }
      return { kind: "ok", user: resultUser }
    } catch {
      return { kind: "bad-data" }
    }
  }

  async fetchProfils( ): Promise<Types.ProfiUser> {
    //make api call
    
      const response : ApiResponse<any>= await this.apisauce.get('/user');
      
    //the typical ways to die when calling an api
      if(!response.ok){
        const problem =getGeneralApiProblem(response)
        if(problem)  return problem
        
      }
      //transform the data to format json
      try {
        const jsonResponse =response.data;
        const data ={ name : jsonResponse.name, job : jsonResponse.job}
        
        const result : Types.ProfileTest = {
          name : response.data.name,
          job : response.data.job
        }
        //console.log(result)
        return data
      } catch (error) {
        return  { kind : "bad-data"}
      }

  }
  async FetchHumans () :Promise<Types.HumansApi>{
    const response : ApiResponse<any> =await this.apisauce.get("/humans");
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }
    try {
      const people=response.data
      return {
        hommes: people.map(hum=>ProfilModel.create({ name : hum.name , job : hum.job}) )
      }
    }catch (error){
      return (error)
    }
  }
  /*async Login ():Promise<Types.LoginApiResponse>{
    const response :ApiResponse<any> =await this.apisauce.get("")
  } */
}
