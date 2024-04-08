import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/sidebarstuff/data-service';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.scss']
})
export class WindComponent implements OnInit {
  static speed: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  public setProperties() {
    let data = this.dataService.getData();
    if (!data) {
      return;
    }
    WindComponent.speed = (data.wind.speed * 3, 6);
  }

  get windSpeed(): number {
    return WindComponent.speed;
  }
}
