export interface IPage <T> {
    data: T,
    message: string,
    success: boolean,
    page: {
        pageNumber: number,
        pageSize: number,
        totalElements: number,
        totalPages: number
    }
}
