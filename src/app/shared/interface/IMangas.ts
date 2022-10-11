import { AgeGroup } from './../enums/AgeGroup.enum';
import { IAuthor } from './Iauthor';

export interface IMangas {
    idManga: number,
    mainTitle: string,
    alternativeTitle: string,
    linkImage: string,
    blobImage: string[],
    description: string,
    status: string,
    rating: number,
    volumeQuantity: number,
    releaseDate: Date,
    lastUpdate: Date,
    authors: IAuthor[],
    genres: AgeGroup[]
}
