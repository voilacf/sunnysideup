import { Component, OnInit } from '@angular/core';
import { City } from 'src/sidebarstuff/city';
import { DataService } from 'src/sidebarstuff/data-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public static cities: Map<string, City> = new Map<string, City>();
  static list: string[] = new Array<string>();;

  //TODO: change name according to file name
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  public static addCity(name: string, data: any) {
    if (SidebarComponent.cities.has(name))
      return
    if (!data || !data.main || !data.main.temp || !data.main.temp_max || !data.main.temp_min) {
      console.error('Invalid data received:', data);
      return;
    }
    try {
      if (!data || !data.main) {
        console.error('Invalid data received:', data);
        return;
      }

      const item = {
        name: name.toUpperCase(),
        time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }).slice(0, -3),
        weatherCondition: data.weather[0].main.toLowerCase(),
        temperature: Math.trunc(data.main.temp),
        heighest: Math.trunc(data.main.temp_max),
        lowest: Math.trunc(data.main.temp_min),
        data: data
      };

      SidebarComponent.cities.set(name, item);
      this.list.push(name);
      localStorage.setItem('cities', JSON.stringify(this.cities));
      localStorage.setItem('names', JSON.stringify(this.list));
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  public static isEmpty(): boolean {
    if (SidebarComponent.cities.size > 0) {
      return false;
    }
    return true;
  }

  public static removeCity(name: string) {
    SidebarComponent.cities.delete(name);
    this.list.pop();
    localStorage.setItem('cities', JSON.stringify(SidebarComponent.cities.entries()));
    localStorage.setItem('names', JSON.stringify(this.list));
  }

  get list(): string[] {
    return SidebarComponent.list;
  }

  get cities(): City[] {
    const array = new Array<City>();
    SidebarComponent.cities.forEach(element => {
      array.push(element);
    });
    return array;
  }

}
