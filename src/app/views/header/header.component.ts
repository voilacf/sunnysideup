import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/weather-service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private static city: string;

  constructor() { }

  ngOnInit(): void {
    // HeaderComponent.city = document.getElementById("cityInput").;
    document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('weatherForm') as HTMLFormElement;
      form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form); // Access form data

        // Access form fields by name
        const name = formData.get('city') as string;
        HeaderComponent.city = name;

        try {
          WeatherService.init(name);
          const weatherData = await WeatherService.getWeatherByCity();
          SidebarComponent.addCity(name, weatherData);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }


        // SidebarComponent.addCity(name, WeatherService.getWeatherByCity())

        // Reset the form
        form.reset();
      });
    });
  }

  static async fetchData() {

  }

}
