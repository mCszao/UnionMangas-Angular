import { AgeGroup } from '../enums/AgeGroup.enum';

export interface ICategories {
    idCategory: number,
    name: string,
    description: string,
    ageGroup: AgeGroup
}
