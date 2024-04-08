import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/weather-service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DataService } from 'src/sidebarstuff/data-service';
import { CityMainComponent } from 'src/app/components/city-main/city-main.component';
import { SunComponent } from 'src/app/components/sun/sun.component';
import { WindComponent } from 'src/app/components/wind/wind.component';
import { FeelsLikeComponent } from 'src/app/components/feels-like/feels-like.component';
import { HumidityComponent } from 'src/app/components/humidity/humidity.component';
import { VisibilityComponent } from 'src/app/components/visibility/visibility.component';
import { PressureComponent } from 'src/app/components/pressure/pressure.component';
import { IconComponent } from 'src/app/components/icon/icon.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private static city: string;

  constructor(private dataService: DataService) { }

  async ngOnInit(): Promise<void> {
    const self = this;
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('weatherForm') as HTMLFormElement;
      form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form); // Access form data

        // Access form fields by name
        const name = formData.get('city') as string;
        HeaderComponent.city = name;

        try {
          // WeatherService.init(name);
          const weatherData = await WeatherService.getWeatherByCity(name);
          SidebarComponent.addCity(name, weatherData);
          if (self.dataService) {
            self.dataService.setData(weatherData);
            let city = new CityMainComponent(self.dataService);
            city.updateComponent();
            let sun = new SunComponent(self.dataService);
            sun.setProperties();
            let wind = new WindComponent(self.dataService);
            wind.setProperties();
            let feelsLike = new FeelsLikeComponent(self.dataService);
            feelsLike.setProperties();
            let humidity = new HumidityComponent(self.dataService);
            humidity.setProperties();
            let visibility = new VisibilityComponent(self.dataService);
            visibility.setProperty();
            let pressure = new PressureComponent(self.dataService);
            pressure.setProperty;
            let icon = new IconComponent(self.dataService);
            icon.setProperties();
          } else {
            console.error("DataService is not initialized.");
          }
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }

        // Reset the form
        form.reset();
      });
    });
  }


  static async fetchData() {

  }

}
