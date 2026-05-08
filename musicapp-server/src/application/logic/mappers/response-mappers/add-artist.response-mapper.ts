import { ArtistModel } from "../../../../domain/models/artist.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { AddArtistResponse } from "../../services/artist/add-artist.response.ts";

export class AddArtistResponseMapper
    extends BaseResponseMapper<AddArtistResponse, ArtistModel> {
    public override map(model: ArtistModel): AddArtistResponse {
        return {
            item: {
                artistName: model.artistName,
                isActive: model.isActive,
            },
        } as AddArtistResponse;
    }
}
