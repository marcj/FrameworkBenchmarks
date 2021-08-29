import 'reflect-metadata';
import { Application, FrameworkModule } from '@deepkit/framework';
import { HttpController }  from './http.controller';
import { cpus } from 'os';
import { ServerHeaderListener } from './common/server-header.listener';
import { PostgresDatabase } from './database.postgres';
import { WorldService } from './world.service';
import { FortuneService } from './fortune.service';
import { MongoDatabase } from './database.mongodb';
import { AppDatabase } from './database';

new Application({
  controllers: [HttpController],
  listeners: [ServerHeaderListener],
  providers: [
    WorldService,
    FortuneService,
    {provide: AppDatabase, useClass: process.env.DATABASE_CONFIGURATION_PROFILE === 'mongodb' ? MongoDatabase : PostgresDatabase},
    HttpController
  ],
  imports: [
    new FrameworkModule({
      host: "0.0.0.0",
      workers: cpus().length-1,
      httpLog: false,
      migrateOnStartup: false,
    }),
  ],
}).run().catch(console.error);
