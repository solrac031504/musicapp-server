import { DataSource } from "typeorm";
import { GenreHierarchyViewModel } from "../../../domain/models/genre-hierarchy-view.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { GenreHierarchyViewEntityMapper } from "../../logic/mappers/genre-hierarchy-view.entity-mapper.ts";
import { GenreHierarchyViewEntity } from "../entities/genre-hierarchy-view.entity.ts";

export class GenreHierarchyViewRepository extends Repository<GenreHierarchyViewModel, GenreHierarchyViewEntity, GenreHierarchyViewEntityMapper, DataSource> {
	constructor(dataSource: DataSource) {
		super(dataSource, GenreHierarchyViewEntity, new GenreHierarchyViewEntityMapper());
	}

	protected override findOneById(_id: number): Promise<GenreHierarchyViewEntity | null> {
		throw new Error("Method not implemented.");
	}

	public async listByGenreId(id: number): Promise<GenreHierarchyViewEntity[]> {
		return await this.repo.findBy({ genreId: id });
	}

	public async listByParentGenreId(id: number): Promise<GenreHierarchyViewEntity[]> {
		return await this.repo.findBy({ parentGenreId: id });
	}
}
