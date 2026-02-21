import { Response } from "miragejs"
import type { Request, Response as ResponseType } from "miragejs"
import * as vanServices from "../services/van.services"

export const getVans = (): ResponseType => {
    try {
        const vans = vanServices.getVans()
        if (vans.length !== 0) {
            return new Response(200, {}, {
                success: true,
                data: vans
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


export const getVansById = (request: Request): ResponseType => {
    try {
        const van = vanServices.getVansById(+request.params.id)
        if (van) {
            return new Response(200, {}, {
                success: true,
                data: van
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