import type { Request, Response } from "miragejs"
import * as vanServices from "../services/van.services"
import { makeResponse } from "../utils/makeResponse"

export const getVans = (): Response => {
    try {
        const vans = vanServices.getVans()
        if (vans.length !== 0) {
            return makeResponse(200, {
                success: true,
                data: vans
            })
        } else {
            return makeResponse(404, {
                success: false,
                errorMsg: "No data found."
            })
        }
    } catch (err) {
        console.error(err)
        return makeResponse(500, {
            success: false,
            errorMsg: "Internal Server Error",
        })
    }
}


export const getVansById = (request: Request): Response => {
    try {
        const van = vanServices.getVansById(+request.params.id)
        if (van) {
            return makeResponse(200, {
                success: true,
                data: van
            })
        } else {
            return makeResponse(404, {
                success: false,
                errorMsg: "No data found."
            })
        }
    } catch (err) {
        console.error(err)
        return makeResponse(500, {
            success: false,
            errorMsg: "Internal Server Error",
        })
    }
}