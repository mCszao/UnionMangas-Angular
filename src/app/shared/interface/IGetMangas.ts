import { IGenre } from './IGenre';
export interface IGetMangas {
    idManga: number,
    mainTitle: string,
    linkImage: string,
    genres: IGenre[]
}
