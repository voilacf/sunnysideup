import { Component, OnInit } from '@angular/core';
import { SunComponent } from 'src/app/components/sun/sun.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('sun') as HTMLFormElement;
      const clockButton = document.getElementById('clock') as HTMLButtonElement;
      let isClockEnabled = false;

      clockButton.addEventListener('click', () => {
        isClockEnabled = !isClockEnabled;
      });

      form.addEventListener('submit', event => {
        event.preventDefault();
        console.log('Clock enabled (on form submit):', isClockEnabled);
        SunComponent.setMilitaryClock(isClockEnabled);
      });
    });
  }

}
