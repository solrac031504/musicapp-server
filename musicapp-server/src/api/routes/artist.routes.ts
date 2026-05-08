import { Hono } from "hono";
import { AddArtistRequest } from "../../application/logic/services/artist/add-artist.request.ts";
import { ArtistController } from "../controllers/artist.controller.ts";

export function artistRoutes(controller: ArtistController): Hono {
    const router = new Hono();

    router.post("/add", async (c) => {
        const body = await c.req.json<AddArtistRequest>();

        const res = await controller.addArtist(body);

        return c.json(res);
    });

    return router;
}
