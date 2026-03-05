import { useState } from "react";

export interface IsLogedIn {
    isLogedIn: boolean,
    setLogedIn: (status: boolean) => void
}

export default function useLogin() {
    // sessionStorage.setItem('isLogedIn', '{"status": false}') // execute on app refresh / reload

    function isLogedIn(): boolean {
        let str: string | null
        try {
            str = sessionStorage.getItem("isLogedIn");
        } catch (error) {
            console.error("SessionStorage Error:", error);
            return false;
        }

        if (!str) {
            console.error("Error: No login status available");
            return false;
        }

        try {
            const obj: { status: boolean } = JSON.parse(str);
            return obj.status;
        } catch {
            console.error("Parsing Error: Invalid JSON format");
            return false;
        }
    }

    const [logedIn, setLogedIn] = useState(() => (isLogedIn()))

    function setLogedInSatus(status: boolean) {

        if (status) {
            setLogedIn(status)
            sessionStorage.setItem('isLogedIn', '{"status": true}')
        } else {
            setLogedIn(status)
            sessionStorage.setItem('isLogedIn', '{"status": false}')
        }

    }

    return {
        isLogedIn: logedIn,
        setLogedIn: setLogedInSatus
    } as IsLogedIn
}
