import { Component } from '@angular/core';
import { Button } from 'src/app/core/type/button';
import { weekdays } from '../../const/weekdays';
import { capitalize } from 'src/app/core/utils/string';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass'],
})
export class SideBarComponent {
  weekdays: Button<{ route: string }>[] = weekdays.map((weekday) => ({
    name: weekday,
    body: capitalize(weekday),
    data: { route: weekday },
  }));
}
