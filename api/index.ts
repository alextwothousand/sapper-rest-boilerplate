import { serve, Server, ServerRequest } from "https://deno.land/std/http/server.ts";
import { cuder } from "https://deno.land/x/cuder/cuder.ts";

const s: Server = serve({ port: 3001 });

const router = new cuder.Router();

router.get("/api/v1/user",
	(request: ServerRequest) => request.respond({ body: "World" })
);

console.log("cuder");

for await (const request of s) {
	router.route(request);
}