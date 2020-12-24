import { Beer } from "./GetBeerDetailsResponse";

export interface KegWithDetails {
    position : string,
    kegId : string,
    beerDetails : Beer
}