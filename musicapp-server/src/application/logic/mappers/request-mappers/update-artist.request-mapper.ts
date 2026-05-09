import { ArtistModel } from "../../../../domain/models/artist.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { UpdateArtistRequest } from "../../services/artist/update/update-artist.request.ts";

export class UpdateArtistRequestMapper
    extends BaseRequestMapper<UpdateArtistRequest, ArtistModel> {
    public override map(req: UpdateArtistRequest): ArtistModel {
        return {
            id: req.item.id,
            artistName: req.item.artistName,
            isActive: req.item.isActive,
        } as ArtistModel;
    }
}
