import { BaseDTORequest } from "../../../../common/requests/base-dto-request.ts";
import { GenreDTO } from "../../../../dto/genre.dto.ts";

export class UpdateGenreRequest extends BaseDTORequest<GenreDTO> {}
