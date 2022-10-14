import { Input, Component, OnInit } from '@angular/core';

import { TreasureLocation } from "../treasure-location";


@Component({
  selector: 'app-treasures-list',
  templateUrl: './treasures-list.component.html',
  styleUrls: ['./treasures-list.component.css']
})
export class TreasuresListComponent implements OnInit {

  @Input() locationList: TreasureLocation[] = [];
  foundTreasures: TreasureLocation[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  searchTreasureLocations(searchText: string): void {
    if (!searchText) this.foundTreasures = this.locationList;
      this.foundTreasures = this.locationList.filter(
        (location: TreasureLocation) => 
        { return (location.name
          .toLowerCase()
          .includes(searchText.toLowerCase())) ||
          (location.city
            .toLowerCase()
            .includes(searchText.toLowerCase())) 
        }
      
      );
  }
}
