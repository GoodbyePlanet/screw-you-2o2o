import {Arg, Query, Resolver} from "type-graphql";
import User from "../model/User";
import Axios, {AxiosResponse} from "axios";


@Resolver(() => User)
export default class UserResolver {

  @Query(() => [User], {description: "GET users from jsonplaceholder"})
  async getUsers(): Promise<AxiosResponse<User>> {
    const users = await Axios.get("https://jsonplaceholder.typicode.com/users");

    return users.data;
  }

  @Query(() => User)
  async getUser(@Arg("id") id: string): Promise<AxiosResponse<User>> {
    const user = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    return user.data;
  }


}