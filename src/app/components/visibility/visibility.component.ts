import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/sidebarstuff/data-service';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.scss']
})
export class VisibilityComponent implements OnInit {
  static value: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  public setProperty() {
    let data = this.dataService.getData();
    if (!data) {
      return;
    }
    VisibilityComponent.value = data.visibility / 1000;
  }

  get kilometers(): number {
    return VisibilityComponent.value;
  }

}
