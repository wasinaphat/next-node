export interface LoginReducer {
    result: string,
    token: string,
    username: string,
    isFetching: boolean,
    isFailed: boolean
}