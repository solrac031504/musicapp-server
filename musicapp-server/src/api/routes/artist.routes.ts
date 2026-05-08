import { Hono } from "hono";
import { AddArtistRequest } from "../../application/logic/services/artist/add/add-artist.request.ts";
import { GetArtistRequest } from "../../application/logic/services/artist/get/get-artist.request.ts";
import { ArtistController } from "../controllers/artist.controller.ts";

export function artistRoutes(controller: ArtistController): Hono {
    const router = new Hono();

    router.get("/:id", async (c) => {
        const req = { id: parseInt(c.req.param("id")) } as GetArtistRequest;

        const res = await controller.getArtist(req);

        return c.json(res);
    });

    router.post("/add", async (c) => {
        const body = await c.req.json<AddArtistRequest>();

        const res = await controller.addArtist(body);

        return c.json(res);
    });

    return router;
}
