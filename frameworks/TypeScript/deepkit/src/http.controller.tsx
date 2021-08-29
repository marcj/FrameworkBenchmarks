import { http, HttpResponse } from '@deepkit/http';
import { FortuneService } from './fortune.service';
import { Fortunes } from './fortunes';
import { WorldService } from './world.service';

@http.controller()
export class HttpController {
  constructor(
    private readonly worldService: WorldService,
    private readonly fortuneService: FortuneService
  ) {}

  @http.GET("/json")
  getJson() {
    return { message: "Hello, World!" };
  }

  @http.GET("/plaintext")
  getHello(response: HttpResponse) {
    response.setHeader("content-type", "text/plain");
    response.end("Hello, World!");
    return response;
  }

  @http.GET("/db")
  getSingleRandomWorld() {
    return this.worldService.getSingleRandomWorld();
  }

  @http.GET("/queries")
  getMultipleRandomWorlds(@http.query() queries: string) {
    return this.worldService.getMultipleRandomWorlds(queries);
  }

  @http.GET("/updates")
  updateRandomWorlds(@http.query() queries: string) {
    return this.worldService.updateRandomWorlds(queries);
  }

  @http.GET("/fortunes")
  async renderFortunes() {
    const fortunes = await this.fortuneService.getFortunes();
    return <Fortunes fortunes={fortunes} />;
  }
}
