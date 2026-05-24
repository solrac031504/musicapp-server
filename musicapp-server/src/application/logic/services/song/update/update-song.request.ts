import { BaseDTORequest } from "../../../../common/requests/base-dto-request.ts";
import { SongDTO } from "../../../../dto/song.dto.ts";

export class UpdateSongRequest extends BaseDTORequest<SongDTO> {}
