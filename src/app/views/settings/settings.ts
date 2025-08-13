import {Component, inject} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {SettingsStore, Language} from "../../reducer/settings.store";

@Component({
  selector: 'app-settings',
  imports: [TranslatePipe],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  readonly store = inject(SettingsStore);

  public switchLang(): void {
    if (this.store.lang() === Language.ENGLISH) {
      this.store.changeToGerman();
      return;
    }
      this.store.changeToEnglish();
  }
}

