import { ArtistRepository } from "../../../../../infrastructure/data-access/repositories/artist.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { DeleteArtistRequest } from "./delete-artist.request.ts";
import { DeleteArtistResponse } from "./delete-artist.response.ts";

export class DeleteArtistService
    extends BaseService<DeleteArtistRequest, DeleteArtistResponse> {
    private readonly repo;

    constructor(repo: ArtistRepository) {
        super();
        this.repo = repo;
    }

    override async execute(
        req: DeleteArtistRequest,
    ): Promise<DeleteArtistResponse> {
        await this.repo.delete(req.id);

        return new DeleteArtistResponse();
    }
}
