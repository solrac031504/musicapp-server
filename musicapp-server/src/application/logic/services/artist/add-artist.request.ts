import { BaseDTORequest } from "../../../common/requests/base-dto-request.ts";
import { ArtistDTO } from "../../../dto/artist.dto.ts";

export class AddArtistRequest extends BaseDTORequest<ArtistDTO> {}
