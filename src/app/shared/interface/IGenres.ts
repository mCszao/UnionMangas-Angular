import { AgeGroup } from './../enums/AgeGroup.enum';

export interface IGenres {
    idGenre: number,
    name: string,
    description: string,
    ageGroup: AgeGroup
}
