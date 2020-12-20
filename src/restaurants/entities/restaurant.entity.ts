import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Restaurant {
	@PrimaryGeneratedColumn()
	@Field()
	id: number

	@Column()
	@Field(() => String)
	name: string

	@Column()
	@Field(() => Boolean)
	isVegan: string

	@Column()
	@Field(() => String)
	address: string

	@Column()
	@Field(() => String)
	ownerName: string

	@Column()
	@Field(() => String)
	categoryName: string
}
