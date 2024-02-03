import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  item = 0
  // let items = item[]

}

interface item {
  city: string,
  time: string,
  temperature: number,
  heighest: number,
  lowest: number
}