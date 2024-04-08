import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { MainWindowComponent } from './views/main-window/main-window.component';
import { CityMainComponent } from './components/city-main/city-main.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast.component';
import { ForecastItemComponent } from './components/forecast-item/forecast-item.component';
import { WindComponent } from './components/wind/wind.component';
import { HumidityComponent } from './components/humidity/humidity.component';
import { FeelsLikeComponent } from './components/feels-like/feels-like.component';
import { HourlyForecastItemComponent } from './components/hourly-forecast-item/hourly-forecast-item.component';
import { SettingsComponent } from './views/settings/settings.component';
import { SunComponent } from './components/sun/sun.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { DafaultComponent } from './views/dafault/dafault.component';
import { PressureComponent } from './components/pressure/pressure.component';
import { VisibilityComponent } from './components/visibility/visibility.component';
import { IconComponent } from './components/icon/icon.component';

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
    ForecastItemComponent,
    WindComponent,
    HumidityComponent,
    FeelsLikeComponent,
    HourlyForecastItemComponent,
    SettingsComponent,
    SunComponent,
    ErrorPageComponent,
    DafaultComponent,
    PressureComponent,
    VisibilityComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
