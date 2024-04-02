import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { DafaultComponent } from './views/dafault/dafault.component';
import { MainWindowComponent } from './views/main-window/main-window.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { SettingsComponent } from './views/settings/settings.component';

export const routes: Routes = [
  { path: 'error', component: ErrorPageComponent },
  { path: "default", component: DafaultComponent },
  { path: 'cityDetails', component: CityDetailsComponent },
  { path: "settings", component: SettingsComponent },
  { path: '**', redirectTo: 'default', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
