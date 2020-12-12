import { Query, Resolver } from '@nestjs/graphql'
import { Restaurant } from './entities/restaurants.entity'

@Resolver()
export class RestaurantResolver {
	@Query(() => Restaurant)
	myRestaurant() {
		return true
	}
}
