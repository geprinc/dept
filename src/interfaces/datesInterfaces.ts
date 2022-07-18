import { ImageSourcePropType } from "react-native";

export interface Date {
    date: string;
}

export interface Dates {
    dates: Date[]
}

export interface Coords {
    lat: number;
    lon: number;
}

export interface DateData {
    image: string;
    date: string;
    caption: string;
    centroid_coordinates: Coords;
    dscovr_j2000_position: Coords;
    lunar_j2000_position: Coords;
    sun_j2000_position: Coords;
}