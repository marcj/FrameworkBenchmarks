import { Database } from '@deepkit/orm';
import { World } from './world.entity';
import { Fortune } from './fortune.entity';
import { MongoDatabaseAdapter } from '@deepkit/mongo';

export class MongoDatabase extends Database {
    constructor() {
        super(
            new MongoDatabaseAdapter('mongodb://tfb-database/hello_world'),
            [World, Fortune]
        );
    }
}
