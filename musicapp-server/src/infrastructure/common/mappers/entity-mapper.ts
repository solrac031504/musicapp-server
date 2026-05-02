import { BaseEntity } from "../entities/base-entity.ts";
import { BaseModel } from "../../../domain/common/models/base.model.ts";

export abstract class EntityMapper<T extends BaseModel, K extends BaseEntity> {
    abstract toModel(entity: K): T;

    abstract fromModel(model: T): K;
}