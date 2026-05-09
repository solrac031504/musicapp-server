import { ArtistRepository } from "../../../../../infrastructure/data-access/repositories/artist.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ListArtistsResponseMapper } from "../../../mappers/response-mappers/list-artists.response-mapper.ts";
import { ListArtistsRequest } from "./list-artists.request.ts";
import { ListArtistsResponse } from "./list-artists.response.ts";

export class ListArtistsService
    extends BaseService<ListArtistsRequest, ListArtistsResponse> {
    private readonly repo;
    private readonly resMapper = new ListArtistsResponseMapper();

    constructor(repo: ArtistRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        _req: ListArtistsRequest,
    ): Promise<ListArtistsResponse> {
        const models = await this.repo.list();

        return this.resMapper.map(models);
    }
}
