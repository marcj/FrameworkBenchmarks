import "reflect-metadata";
import { Application, KernelModule } from "@deepkit/framework";
import { SqlController } from "./sql/sql.controller";
import { cpus } from "os";
import { ServerHeaderListener } from "./common/server-header.listener";
import { PostgresDatabase } from "./sql/postgres.database";
import { WorldService } from "./sql/world.service";
import { FortuneService } from "./sql/fortune.service";

Application.create({
  controllers: [SqlController],
  listeners: [ServerHeaderListener],
  providers: [WorldService, FortuneService],
  imports: [
    KernelModule.configure({
      host: "0.0.0.0",
      workers: cpus().length,
      databases: [PostgresDatabase],
      migrateOnStartup: false,
    }),
  ],
}).run();
