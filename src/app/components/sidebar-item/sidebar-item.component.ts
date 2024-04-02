import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityMainComponent } from '../city-main/city-main.component';
import { DataService } from 'src/sidebarstuff/data-service';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {
  @Input() cityName!: string;
  @Input() time!: string;
  @Input() weatherCondition!: string;
  @Input() temperature!: number;
  @Input() max_temperature!: number;
  @Input() min_temperature!: number;
  @Input() full_data: any
  // @Output() viewingCityDetails: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dataService: DataService) {

  }

  onButtonClick() {
    console.log("setting data in dataservice in sidebar item")
    this.dataService.setData(this.full_data);
    // CityMainComponent.updateComponent();
  }

  ngOnInit(): void {
    // document.addEventListener('DOMContentLoaded', function () {
    //   const button = document.getElementById(`${this.cityName}-sidebar-item`) as HTMLFormElement;
    //   button.addEventListener("click", event => {
    //     if (!this.cityName)
    //       return;
    //     CityMainComponent.setCityName(SidebarItemComponent.cityName);
    //     CityMainComponent.setTemperature(SidebarItemComponent.temperature);
    //     CityMainComponent.setMaxTemperature(SidebarItemComponent.max_temperature);
    //     CityMainComponent.setMinTemperature(SidebarItemComponent.min_temperature);
    //   });
    // });
  }
}
