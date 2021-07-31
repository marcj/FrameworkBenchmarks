import { injectable } from "@deepkit/injector";
import { Fortune } from "./fortune.entity";
import { PostgresDatabase } from "./postgres.database";

@injectable()
export class FortuneService {
  constructor(private readonly pgDb: PostgresDatabase) {}

  public async getFortunes() {
    const fortunes = await this.pgDb.query(Fortune).find();
    fortunes.push({
      id: 0,
      message: "Additional fortune added at request time.",
    });

    fortunes.sort((a, b) => (a.message < b.message ? -1 : 1));
    return fortunes;
  }
}
