import { BaseDTO } from "../dto/base-dto.ts";
import { BaseResponse } from "./base-response.ts";

export class BaseItemResponse<T extends BaseDTO> extends BaseResponse {
    item!: T | null;

    constructor(item: T | null) {
        super();

        this.item = item;
    }
}
