import {Component, inject} from '@angular/core';
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {SettingsStore, Language} from "../../reducer/settings.store";

@Component({
  selector: 'app-settings',
  imports: [TranslatePipe],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  readonly store = inject(SettingsStore);
  readonly translateService = inject(TranslateService);

  public switchLang(): void {
    if (this.store.lang() === Language.ENGLISH) {
      this.store.changeToGerman();
    } else {
      this.store.changeToEnglish();
    }
    this.translateService.use(this.store.lang());
  }
}

