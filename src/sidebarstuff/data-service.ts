import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data: any;

    constructor() { }

    public setData(cityName: any) {
        // console.log(`received data in data service ${JSON.stringify(cityName)}`)
        this.data = cityName;
    }

    public getData() {
        return this.data;
    }
}
