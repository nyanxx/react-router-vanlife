import { createServer, Response } from "miragejs";
import { vanData } from "./vanData";
import type { Van } from "../types/Van";

const userVanData: Van[] = [vanData[4], vanData[2], vanData[5]]

try {
    createServer({
        routes() {
            this.namespace = "api"
            // this.get("/vans", () => vanData)
            this.get("/vans", () => {
                try {
                    if (vanData.length !== 0) {
                        return new Response(200, {}, {
                            success: true,
                            data: vanData
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
            })

            this.get("/vans/:id", (_, request) => {
                try {
                    const van = vanData.find(van => (van.id === +request.params.id))
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
            })

            this.get("/user/uservans", () => {
                try {
                    if (vanData.length !== 0) {
                        return new Response(200, {}, {
                            success: true,
                            data: userVanData
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
            })

            this.get("/user/uservans/:id", (_, request) => {
                try {
                    const { id } = request.params
                    const van = userVanData.find(van => (van.id === +id))
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
            })

            this.get("*",
                () => {
                    return new Response(404, {}, {
                        success: false,
                        erroMsg: "No route found"
                    })
                }
            )
        },
    })
} catch (err) {
    console.error("Server ERR: ", err)
}

// fetch("/api/vans/134").then(res => res.json()).then(data => console.log(data))

