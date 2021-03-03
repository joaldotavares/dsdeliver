import axios from "axios";
import { OrderPayload } from "./Orders/types";

const API_URL = 'http://localhost:8080';

export function fetchProducts(){
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=pk.eyJ1Ijoiam9hbGRvIiwiYSI6ImNrbHBzaXpqcTBvOHIydnBzNHJnazg3NWkifQ.Q9sZjZ4-u07vLAscH6dOvQ`)
}

export function saveOrder(payload: OrderPayload) {
    return axios.post(`${API_URL}/orders`, payload);
}