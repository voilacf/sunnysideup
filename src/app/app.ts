import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { provideRoutes, RouterOutlet } from '@angular/router';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterOutlet,
        BrowserModule,
        AppRoutingModule // Make sure AppRoutingModule is imported here
    ],
    providers: [provideRoutes(routes)],
    bootstrap: [AppComponent]
})
export class AppData {
}

// }

// function displayError(message: string) {
// // Customize this function to display error messages in your UI
// // name.innerHTML = `<app-default-main-window></app-default-main-window>`;
// }