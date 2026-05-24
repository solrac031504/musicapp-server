import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { ArtistDTO } from "../../../../dto/artist.dto.ts";

export class ListArtistsResponse extends BaseListResponse<ArtistDTO> {
    constructor(dtos: ArtistDTO[]) {
        super(dtos);
    }
}
