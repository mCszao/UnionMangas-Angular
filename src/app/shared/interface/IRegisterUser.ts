export interface IRegisterUser {
    userName: string,
    password: string,
    readerDto: {
        email: string,
        quantityRead: number,
        birthdate: Date,
    },
    scan?: boolean
}
