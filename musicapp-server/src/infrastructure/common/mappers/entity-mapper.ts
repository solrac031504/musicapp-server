import { BaseEntity } from "../entities/base-entity.ts";
import { BaseModel } from "../../../domain/common/models/base.model.ts";

export abstract class EntityMapper<T extends typeof BaseModel, K extends typeof BaseEntity> {
    abstract toModel(entity: K): T;

    abstract fromModel(model: T): K;
}