import { Args, Query, Resolver } from '@nestjs/graphql'
import { Restaurant } from './entities/restaurant.entity'

@Resolver((of) => Restaurant)
export class RestaurantResolver {
	@Query((returns) => [Restaurant])
	restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
		console.log('🚀 ~ file: restaurants.resolver.ts ~ line 8 ~ RestaurantResolver ~ restaurants ~ veganOnly', veganOnly)
		return []
	}
}
