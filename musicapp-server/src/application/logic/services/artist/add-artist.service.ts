import { ArtistRepository } from "../../../../infrastructure/data-access/repositories/artist.repository.ts";
import { BaseService } from "../../../common/services/base-service.ts";
import { AddArtistRequestMapper } from "../../mappers/request-mappers/add-artist.request-mapper.ts";
import { AddArtistResponseMapper } from "../../mappers/response-mappers/add-artist.response-mapper.ts";
import { AddArtistRequest } from "./add-artist.request.ts";
import { AddArtistResponse } from "./add-artist.response.ts";

export class AddArtistService
    extends BaseService<AddArtistRequest, AddArtistResponse> {
    private readonly repo;
    private readonly reqMapper = new AddArtistRequestMapper();
    private readonly resMapper = new AddArtistResponseMapper();

    constructor(repo: ArtistRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: AddArtistRequest,
    ): Promise<AddArtistResponse> {
        const model = this.reqMapper.map(req);

        const addedModel = await this.repo.add(model);

        return this.resMapper.map(addedModel);
    }
}
