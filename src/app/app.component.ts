import { Component } from '@angular/core';

import { TreasureLocation } from './treasure-location';
import { treasureLocationList } from './treasures-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Treasure';

  treasureLocationList: TreasureLocation[] = treasureLocationList;

}
