import type { Request, Response } from "miragejs"
import * as userServices from "../services/user.services"
import { makeResponse } from "../utils/makeResponse"

export const getUserVans = (): Response => {
    try {
        const userVans = userServices.getUserVans()
        if (userVans.length !== 0) {
            return makeResponse(200, {
                success: true,
                data: userVans
            })
        } else {
            return makeResponse(404, {
                success: false,
                errorMsg: "No data found.",
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

export const getUserVansById = (request: Request): Response => {
    try {
        const { id } = request.params
        const userVan = userServices.getUserVansById(+id)
        if (userVan) {
            return makeResponse(200, {
                success: true,
                data: userVan
            })
        } else {
            return makeResponse(404, {
                success: false,
                errorMsg: "No data found.",
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