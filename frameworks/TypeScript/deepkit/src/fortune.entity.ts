import { entity, t } from "@deepkit/type";

@entity.name("fortune")
export class Fortune {
  @t.primary.autoIncrement public id: number = 0;
  @t public message: string = "";
}
