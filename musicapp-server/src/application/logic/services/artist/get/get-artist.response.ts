import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { ArtistDTO } from "../../../../dto/artist.dto.ts";

export class GetArtistResponse extends BaseItemResponse<ArtistDTO> {
    constructor(item: ArtistDTO | null = null) {
        super(item);
    }
}
