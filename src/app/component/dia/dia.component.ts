import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.scss']
})
export class DiaComponent implements OnInit {
  data= Date.now()

  constructor() { }


  ngOnInit(): void {
    this.data;
  }


}
