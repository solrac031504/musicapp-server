import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { ArtistDTO } from "../../../../dto/artist.dto.ts";

export class UpdateArtistResponse extends BaseItemResponse<ArtistDTO> {
    constructor(dto: ArtistDTO | null) {
        super(dto);
    }
}
