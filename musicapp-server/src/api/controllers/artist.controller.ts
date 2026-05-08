import { AddArtistRequest } from "../../application/logic/services/artist/add/add-artist.request.ts";
import { AddArtistResponse } from "../../application/logic/services/artist/add/add-artist.response.ts";
import { AddArtistService } from "../../application/logic/services/artist/add/add-artist.service.ts";

export class ArtistController {
    private readonly addArtistService;

    constructor(addArtistService: AddArtistService) {
        this.addArtistService = addArtistService;
    }

    public async addArtist(req: AddArtistRequest): Promise<AddArtistResponse> {
        return await this.addArtistService.execute(req);
    }
}
