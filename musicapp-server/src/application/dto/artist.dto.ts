import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class ArtistDTO extends BaseIdDTO {
    artistName!: string;

    isActive!: boolean;
}
