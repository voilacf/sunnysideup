// DataService.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data: BehaviorSubject<any> = new BehaviorSubject<any>('');

    setData(cityName: any) {
        console.log(`received data in data service ${JSON.stringify(cityName)}`)
        this.data.next(cityName);
    }

    getData() {
        return this.data.asObservable();
    }
}
