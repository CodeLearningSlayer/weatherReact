import { useState, useCallback } from "react";

export const useHttp = () => {
    const [process, setProcess] = useState('waiting');
    const request = useCallback(async(url, method="GET", body = null, headers = {'Content-Type':'application/json', "Access-Control-Allow-Origin": "*"}) => {
        setProcess("loading");
        try{
            const response = await fetch(url, {method, body, headers});
            if (!response.ok) {
                throw new Error(`couldn't fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        }

        catch(e){
            setProcess("error");
            throw e;
        }

    }, []);
    return {request, process, setProcess};
}