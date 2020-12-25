import {Arg, Query, Resolver} from "type-graphql";
import User from "../model/User";
import Axios, {AxiosResponse} from "axios";


@Resolver(() => User)
export default class UserResolver {

  private readonly _jsonplaceholderUrl = "https://jsonplaceholder.typicode.com";

  @Query(() => [User], {description: "GET users from jsonplaceholder"})
  async getUsers(): Promise<AxiosResponse<User>> {
    const users = await Axios.get(`${this._jsonplaceholderUrl}/users`);

    return users.data;
  }

  @Query(() => User)
  async getUser(@Arg("id") id: string): Promise<AxiosResponse<User>> {
    const user = await Axios.get(`${this._jsonplaceholderUrl}/users/${id}`);

    return user.data;
  }

}