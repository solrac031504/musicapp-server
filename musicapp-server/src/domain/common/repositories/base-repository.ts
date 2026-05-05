import { BaseModel } from "../models/base.model.ts";

export abstract class BaseRepository<T extends BaseModel> {
    public abstract add(model: T): Promise<T>;

    public abstract addMany(models: T[]): Promise<T[]>;

    public abstract update(model: T): Promise<T>;

    public abstract delete(id: number): Promise<void>;

    public abstract list(): Promise<T[]>;

    public abstract getById(id: number): Promise<T | null>;

    public abstract save(): Promise<void>;
}