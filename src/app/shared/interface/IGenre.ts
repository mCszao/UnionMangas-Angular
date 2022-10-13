import { AgeGroup } from '../enums/AgeGroup.enum';

export interface IGenre {
    idGenre: number,
    name: string,
    description: string,
    ageGroup: AgeGroup
}
