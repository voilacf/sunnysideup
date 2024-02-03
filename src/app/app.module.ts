import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { CityMainComponent } from './city-main/city-main.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { HourlyForecastComponent } from './hourly-forecast/hourly-forecast.component';
import { TenDayForecastComponent } from './ten-day-forecast/ten-day-forecast.component';
import { PercipatationComponent } from './percipatation/percipatation.component';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { TenDayItemComponent } from './ten-day-item/ten-day-item.component';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';
import { MoonComponent } from './moon/moon.component';
import { WindComponent } from './wind/wind.component';
import { UvIndexComponent } from './uv-index/uv-index.component';
import { SunComponent } from './sun/sun.component';
import { HumidityComponent } from './humidity/humidity.component';
import { FeelsLikeComponent } from './feels-like/feels-like.component';
import { HourlyForecastItemComponent } from './hourly-forecast-item/hourly-forecast-item.component';
import { SettingsComponent } from './settings/settings.component';
import { DefaultMainWindowComponent } from './default-main-window/default-main-window.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarItemComponent,
    MainWindowComponent,
    CityMainComponent,
    CityDetailsComponent,
    HourlyForecastComponent,
    TenDayForecastComponent,
    PercipatationComponent,
    AirQualityComponent,
    TenDayItemComponent,
    ForecastItemComponent,
    MoonComponent,
    WindComponent,
    UvIndexComponent,
    SunComponent,
    HumidityComponent,
    FeelsLikeComponent,
    HourlyForecastItemComponent,
    SettingsComponent,
    DefaultMainWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
