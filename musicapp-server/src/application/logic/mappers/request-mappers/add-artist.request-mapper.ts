import { ArtistModel } from "../../../../domain/models/artist.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { AddArtistRequest } from "../../services/artist/add-artist.request.ts";

export class AddArtistRequestMapper
    extends BaseRequestMapper<AddArtistRequest, ArtistModel> {
    public override map(req: AddArtistRequest): ArtistModel {
        return {
            id: req.item.id,
            artistName: req.item.artistName,
            isActive: req.item.isActive,
        } as ArtistModel;
    }
}
