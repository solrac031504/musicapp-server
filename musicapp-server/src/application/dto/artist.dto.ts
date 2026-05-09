import { ArtistModel } from "../../domain/models/artist.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class ArtistDTO extends BaseIdDTO {
    artistName!: string;

    isActive!: boolean;

    constructor(model: ArtistModel) {
        super();

        this.id = model.id;
        this.artistName = model.artistName;
        this.isActive = model.isActive;
    }
}
