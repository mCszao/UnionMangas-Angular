import { ICategories } from './ICategories';
export interface IGetMangas {
    idManga: number,
    mainTitle: string,
    linkImage: string,
    categories: ICategories[]
}
