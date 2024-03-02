import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.css']
})
export class MediumCardComponent implements OnInit {

  @Input()
  photoCover:string = ""

  @Input()
  cardDescription:string = ""

  @Input()
  Id:string = ""

  @Input()
  educationPlatform:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
