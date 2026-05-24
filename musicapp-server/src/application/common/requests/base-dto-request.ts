import { BaseDTO } from "../dto/base-dto.ts";
import { BaseRequest } from "./base-request.ts";

export class BaseDTORequest<T extends BaseDTO> extends BaseRequest {
    item: T = null!;
}
