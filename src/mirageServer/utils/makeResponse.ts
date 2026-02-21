import { Response } from "miragejs";
import type { FailedResponse, ResponseBody, SuccessResponse } from "../types/ResponseBody";

export function makeResponse<T>(code: 200, body: SuccessResponse<T>): Response;
export function makeResponse(code: 404 | 500, body: FailedResponse): Response;

export function makeResponse(
    code: 200 | 404 | 500,
    body: ResponseBody<unknown>
): Response {
    return new Response(code, {}, body)
}
