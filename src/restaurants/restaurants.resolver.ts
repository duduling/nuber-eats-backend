import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateRestaurantDto } from './dtos/create-restaurant.dto'
import { Restaurant } from './entities/restaurant.entity'

@Resolver(() => Restaurant)
export class RestaurantResolver {
	@Query(() => [Restaurant])
	restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
		console.log('🚀 ~ file: restaurants.resolver.ts ~ line 8 ~ RestaurantResolver ~ restaurants ~ veganOnly', veganOnly)
		return []
	}

	@Mutation(() => Boolean)
	createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto): boolean {
		return true
	}
}
