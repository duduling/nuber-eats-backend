import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { join } from 'path'

import { RestaurantsModule } from './restaurants/restaurants.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
		}),
		TypeOrmModule.forRoot({
		}),
		GraphQLModule.forRoot({
			// autoSchemaFile: true,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
		}),
		RestaurantsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
