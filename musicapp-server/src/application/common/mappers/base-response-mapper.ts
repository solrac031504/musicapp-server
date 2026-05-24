import { BaseModel } from "../../../domain/common/models/base.model.ts";
import { BaseResponse } from "../responses/base-response.ts";

export abstract class BaseResponseMapper<
    T extends BaseResponse,
    F extends BaseModel,
> {
    public abstract map(model: F): T;
}
