import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/sidebarstuff/data-service';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.scss']
})
export class PressureComponent implements OnInit {
  static pressure: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  public setProperty(): void {
    let data = this.dataService.getData();
    if (!data) {
      return;
    }
    PressureComponent.pressure = data.main.pressure;
  }

  get value(): number {
    return PressureComponent.pressure;
  }
}
