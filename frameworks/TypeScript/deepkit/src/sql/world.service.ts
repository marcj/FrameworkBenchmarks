import { injectable } from "@deepkit/injector";
import { PatchResult } from "@deepkit/orm";
import { PostgresDatabase } from "./postgres.database";
import { World } from "./world.entity";

@injectable()
export class WorldService {
  constructor(private readonly postgresDb: PostgresDatabase) {}

  private getRandomWorldId() {
    return Math.floor(Math.random() * 10000) + 1;
  }

  private parseQueryParam(queries: string) {
    return Math.min(Math.max(parseInt(queries) || 1, 1), 500);
  }

  private updateRandomWorld(): Promise<PatchResult<World>> {
    return this.postgresDb
      .query(World)
      .filter({ id: this.getRandomWorldId() })
      .returning("id", "randomnumber")
      .patchOne({ randomnumber: this.getRandomWorldId() });
  }

  public async getSingleRandomWorld() {
    return this.postgresDb
      .query(World)
      .filter({ id: this.getRandomWorldId() })
      .findOne();
  }

  public async getMultipleRandomWorlds(queries: string) {
    const numberOfWorldsToRetrieve = this.parseQueryParam(queries);
    const promisesArray = [];

    for (let i = 0; i < numberOfWorldsToRetrieve; i++) {
      promisesArray.push(this.getSingleRandomWorld());
    }

    const worlds = await Promise.all(promisesArray);
    return worlds;
  }

  public async updateRandomWorlds(queries: string): Promise<World[]> {
    const numberOfWorldsToUpdate = this.parseQueryParam(queries);

    const promises = [];

    for (let i = 0; i < numberOfWorldsToUpdate; i++) {
      promises.push(this.updateRandomWorld());
    }

    const updatedWorlds = await (
      await Promise.all(promises)
    ).map((x) => x.returning);
    return updatedWorlds;
  }
}
