import { 
    DataSource, 
    EntityTarget, 
    Repository as TypeOrmRepository 
} from "typeorm";
import { BaseModel } from "../../../../domain/common/models/base.model.ts";
import { BaseEntity } from "../entities/base-entity.ts";
import { BaseRepository } from "../../../../domain/common/repositories/base-repository.ts";

export abstract class Repository<T extends BaseModel, K extends BaseEntity, Y extends DataSource> extends BaseRepository<T> {
    private readonly dataSource: Y;
    protected readonly repo: TypeOrmRepository<K>;

    constructor(dataSource: Y, entity: EntityTarget<K>) {
        super();
        this.dataSource = dataSource;
        this.repo = dataSource.getRepository<K>(entity);
    }

    public override async add(model: T): Promise<T> {
        const entity = this.fromModel(model);

        await this.repo.insert(entity);

        return this.toModel(entity);
    }

    public override async addMany(models: T[]): Promise<T[]> {
        const entities = models.map(m => this.fromModel(m));

        await this.repo.insert(entities);

        return entities.map(e => this.toModel(e));
    }

    public override async update(model: T): Promise<T> {
        const entity = this.fromModel(model);

        await this.repo.save(entity);

        return this.toModel(entity);
    }

    public override async delete(id: number): Promise<void> {
        const entity = await this.findOneById(id);

        if (!entity) return;

        this.repo.remove(entity!);
    }

    public override async list(): Promise<T[]> {
        const entities = await this.repo.find();

        return entities.map(e => this.toModel(e));
    }

    public override async getById(id: number): Promise<T | null> {
        const entity = await this.findOneById(id);

        return entity ? this.toModel(entity) : null;
    }

    public abstract findOneById(id: number): Promise<K | null>;

    public abstract findOneByKey(model: T): Promise<K | null>;

    public abstract toModel(entity: K): T;

    public abstract fromModel(model: T): K;
}