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
			type: 'postgres',
			host: process.env.DB_HOST,
			port: Number(process.env.DB_PORT),
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			synchronize: true,
			logging: true,
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
