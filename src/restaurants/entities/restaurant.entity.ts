import { Field, ObjectType } from '@nestjs/graphql'
@ObjectType()
export class Restaurant {
	@Field(() => String)
	name: string

	@Field(() => Boolean)
	isVegan: string

	@Field(() => String)
	address: string

	@Field(() => String)
	ownerName: string
}