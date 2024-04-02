import { Injectable } from '@angular/core';
import { City } from './city';

@Injectable({
    providedIn: 'root'
})
export class MapDataService {
    private mapData: Map<string, City> = new Map();

    constructor() { }

    getMapData(): Map<string, City> {
        return this.mapData;
    }

    setMapData(data: Map<string, City>): void {
        this.mapData = data;
    }
}
