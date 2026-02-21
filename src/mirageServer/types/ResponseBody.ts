export type SuccessResponse<T> = {
    success: true
    data: T
}

export type FailedResponse = {
    success: false
    errorMsg: string
}

export type ResponseBody<T> = SuccessResponse<T> | FailedResponse