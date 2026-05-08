import { BaseDTO } from "../common/dto/base-dto.ts";

export class ArtistDTO extends BaseDTO {
    artistName!: string;

    isActive!: boolean;
}
