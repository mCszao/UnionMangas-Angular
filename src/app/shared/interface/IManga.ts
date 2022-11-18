import { ICategories } from './ICategories';
import { IAuthor } from "./IAuthor";

export interface IManga {
    idManga?: number,
    mainTitle: string,
    alternativeTitle?: string,
    linkImage: string,
    blobImage?: string[],
    description: string,
    status: string,
    rating?: number,
    volumeQuantity?: number,
    releaseDate: Date | string,
    lastUpdate: Date | string,
    authors: IAuthor[],
    categories: ICategories[]
}
