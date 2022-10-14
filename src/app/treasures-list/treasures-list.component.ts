import { Input, Component, OnInit } from '@angular/core';
import { TreasureLocation } from "../treasure-location";

@Component({
  selector: 'app-treasures-list',
  templateUrl: './treasures-list.component.html',
  styleUrls: ['./treasures-list.component.css']
})
export class TreasuresListComponent implements OnInit {

  @Input() locationList: TreasureLocation[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
