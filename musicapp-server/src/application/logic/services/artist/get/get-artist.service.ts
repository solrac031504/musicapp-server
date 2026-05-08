import { ArtistRepository } from "../../../../../infrastructure/data-access/repositories/artist.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { GetArtistResponseMapper } from "../../../mappers/response-mappers/get-artist.response-mapper.ts";
import { GetArtistRequest } from "./get-artist.request.ts";
import { GetArtistResponse } from "./get-artist.response.ts";

export class GetArtistService
    extends BaseService<GetArtistRequest, GetArtistResponse> {
    private readonly repo;
    private readonly resMapper = new GetArtistResponseMapper();

    constructor(repo: ArtistRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: GetArtistRequest,
    ): Promise<GetArtistResponse> {
        const artistModel = await this.repo.getById(req.id);

        if (!artistModel) new GetArtistResponse();

        return this.resMapper.map(artistModel!);
    }
}
