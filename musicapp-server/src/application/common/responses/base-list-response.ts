import { BaseDTO } from "../dto/base-dto.ts";
import { BaseResponse } from "./base-response.ts";

export class BaseListResponse<T extends BaseDTO> extends BaseResponse {
    items: T[] = [];

    count: number = 0;

    constructor(items: T[]) {
        super();

        this.items = items;
        this.count = items.length;
    }
}
