import { ArtistModel } from "../../../../domain/models/artist.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ArtistDTO } from "../../../dto/artist.dto.ts";
import { GetArtistResponse } from "../../services/artist/get/get-artist.response.ts";

export class GetArtistResponseMapper
    extends BaseResponseMapper<GetArtistResponse, ArtistModel> {
    public override map(model: ArtistModel): GetArtistResponse {
        return new GetArtistResponse({
            id: model.id,
            artistName: model.artistName,
            isActive: model.isActive,
        } as ArtistDTO);
    }
}
