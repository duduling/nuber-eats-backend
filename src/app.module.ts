import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import * as Joi from 'joi'
import { join } from 'path'
import { Restaurant } from './restaurants/entities/restaurant.entity'

import { RestaurantsModule } from './restaurants/restaurants.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
			validationSchema: Joi.object({
				NODE_ENV: Joi.string().valid('dev', 'prod').required(),
				DB_HOST: Joi.string().required(),
				DB_PORT: Joi.string().required(),
				DB_USERNAME: Joi.string().required(),
				DB_PASSWORD: Joi.string().required(),
				DB_DATABASE: Joi.string().required(),
			}),
		}),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST,
			port: Number(process.env.DB_PORT),
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			synchronize: process.env.NODE_ENV !== 'prod',
			logging: true,
			entities: [Restaurant],
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
