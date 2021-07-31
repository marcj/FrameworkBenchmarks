import { eventDispatcher } from "@deepkit/event";
import { httpWorkflow } from "@deepkit/http";

export class ServerHeaderListener {
    @eventDispatcher.listen(httpWorkflow.onController)
    onController(event: typeof httpWorkflow.onController.event) {
        if (event.sent) return;

        event.response.setHeader('Server', 'deepkit');
    }
}