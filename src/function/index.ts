import { api } from "../api";

export async function getDigimons(){
    try { 
        const resp = await api.get(`/digimon`)
        return resp?.data
    }
    catch (err) {
        console.warn(err);
    }
}

export async function getDigimonByName(name: string){
    try { 
        const resp = await api.get(`/digimon/name/${name}`)
        return resp?.data
    }
    catch (err) {
        console.warn(err);
    }
}

export async function getDigimonByLevel(level: string){
    try {
        const resp = await api.get(`/digimon/level/${level}`)
        return resp?.data
    }
    catch (err) {
        console.warn(err);
    }
}