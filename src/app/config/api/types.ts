export type APIResponse<T> = {
    message: string
    data: T;
    status?: number;
}