import { Database } from "@deepkit/orm";
import { PostgresDatabaseAdapter } from "@deepkit/postgres";
import { World } from "./world.entity";
import { Fortune } from "./fortune.entity";

export class PostgresDatabase extends Database {
  constructor() {
    super(
      new PostgresDatabaseAdapter({
        host: "tfb-database",
        database: "hello_world",
        port: 5432,
        user: "benchmarkdbuser",
        password: "benchmarkdbpass",
      }),
      [World, Fortune]
    );
  }
}
