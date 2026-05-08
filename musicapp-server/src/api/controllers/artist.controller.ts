import { AddArtistRequest } from "../../application/logic/services/artist/add/add-artist.request.ts";
import { AddArtistResponse } from "../../application/logic/services/artist/add/add-artist.response.ts";
import { AddArtistService } from "../../application/logic/services/artist/add/add-artist.service.ts";
import { GetArtistRequest } from "../../application/logic/services/artist/get/get-artist.request.ts";
import { GetArtistResponse } from "../../application/logic/services/artist/get/get-artist.response.ts";
import { GetArtistService } from "../../application/logic/services/artist/get/get-artist.service.ts";

export class ArtistController {
    private readonly addArtistService;
    private readonly getArtistService;

    constructor(
        addArtistService: AddArtistService,
        getArtistService: GetArtistService,
    ) {
        this.addArtistService = addArtistService;
        this.getArtistService = getArtistService;
    }

    public async getArtist(req: GetArtistRequest): Promise<GetArtistResponse> {
        return await this.getArtistService.execute(req);
    }

    public async addArtist(req: AddArtistRequest): Promise<AddArtistResponse> {
        return await this.addArtistService.execute(req);
    }
}
