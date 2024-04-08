import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/sidebarstuff/data-service';

@Component({
  selector: 'app-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.scss']
})
export class SunComponent implements OnInit {
  static dawn: string;
  static dusk: string;
  static militaryClock: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

  public setProperties(): void {
    let data = this.dataService.getData();
    if (!data) {
      console.log("dataService is empty");
      return;
    }
    const dawn = new Date(data.sys.sunrise * 1000);
    const dusk = new Date(data.sys.sunset * 1000)
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: SunComponent.militaryClock
    };
    // const formattedTime = dawn.toLocaleTimeString(`${data.country.toLowerCase()}-${data.country}`, options);
    const zone = data.sys.country;
    SunComponent.dawn = dawn.toLocaleTimeString(`${zone.toLowerCase()}-${zone}`, options);
    //  new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    SunComponent.dusk = dusk.toLocaleTimeString(`${zone.toLowerCase()}-${zone}`, options);
    // new Date(data.sys.sunset * 1000).toLocaleTimeString();
  }

  get sunrise(): string {
    return SunComponent.dawn;
  }

  get sunset(): string {
    return SunComponent.dusk;
  }

  public static setMilitaryClock(on: boolean) {
    SunComponent.militaryClock = on;
  }

}
