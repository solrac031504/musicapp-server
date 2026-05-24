import { BaseModel } from "../../../domain/common/models/base.model.ts";
import { BaseResponse } from "../responses/base-response.ts";

export abstract class BaseListResponseMapper<
    T extends BaseResponse,
    F extends BaseModel,
> {
    public abstract map(models: F[]): T;
}
