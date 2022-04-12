import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.scss']
})
export class AgendarComponent implements OnInit {

  items: any [] = [1,2,3,4,5,6,7,8];

  constructor() { }

  ngOnInit(): void {
  }

}
