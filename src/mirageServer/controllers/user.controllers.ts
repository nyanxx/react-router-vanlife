import { Response } from "miragejs"
import type { Request, Response as ResponseType } from "miragejs"
import * as userServices from "../services/user.services"

export const getUserVans = (): ResponseType => {
    try {
        const userVans = userServices.getUserVans()
        if (userVans.length !== 0) {
            return new Response(200, {}, {
                success: true,
                data: userVans
            })
        } else {
            return new Response(404, {}, {
                success: false,
                errorMsg: "No data found."
            })
        }
    } catch (err) {
        console.error(err)
        return new Response(500, {}, {
            success: false,
            errorMsg: "Internal Server Error",
        })
    }
}

export const getUserVansById = (request: Request): ResponseType => {
    try {
        const { id } = request.params
        const userVan = userServices.getUserVansById(+id)
        if (userVan) {
            return new Response(200, {}, {
                success: true,
                data: userVan
            })
        } else {
            return new Response(404, {}, {
                success: false,
                errorMsg: "No data found."
            })
        }
    } catch (err) {
        console.error(err)
        return new Response(500, {}, {
            success: false,
            errorMsg: "Internal Server Error",
        })
    }
}