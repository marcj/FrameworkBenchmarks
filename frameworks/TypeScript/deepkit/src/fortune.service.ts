import { injectable } from '@deepkit/injector';
import { Fortune } from './fortune.entity';
import { AppDatabase } from './database';

@injectable
export class FortuneService {
  constructor(private readonly database: AppDatabase) {}

  public async getFortunes() {
    const fortunes = await this.database.query(Fortune).find();
    fortunes.push({
      id: 0,
      message: "Additional fortune added at request time.",
    });

    fortunes.sort((a, b) => (a.message < b.message ? -1 : 1));
    return fortunes;
  }
}
