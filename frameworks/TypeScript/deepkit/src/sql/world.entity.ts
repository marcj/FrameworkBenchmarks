import { entity, t } from '@deepkit/type';

@entity.name('world')
export class World {
    @t.primary.autoIncrement public id: number = 0;
    @t randomnumber: number = 0;
}