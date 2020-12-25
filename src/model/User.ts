import {Field, ObjectType} from "type-graphql";


@ObjectType()
class Address {

  @Field()
  city: string;

  @Field()
  street: string;

  @Field()
  zipcode: string;

}
@ObjectType()
class Company {

  @Field()
  name: string;
}

@ObjectType()
export default class User {

  @Field({ nullable: true })
  name: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  website: string;

  @Field()
  address: Address;

  @Field()
  company: Company;

}