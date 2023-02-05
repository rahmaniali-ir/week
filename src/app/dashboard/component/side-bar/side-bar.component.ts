import { Component, OnInit } from '@angular/core';
import { Button } from 'src/app/core/type/button';
import { weekdays } from '../../const/weekdays';
import { capitalize } from 'src/app/core/utils/string';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass'],
})
export class SideBarComponent implements OnInit {
  hoveredHeader = true;

  weekdays: Button<{ route: string }>[] = weekdays.map((weekday) => ({
    name: weekday,
    body: capitalize(weekday),
    data: { route: weekday },
  }));

  ngOnInit(): void {
    setTimeout(() => {
      this.hoveredHeader = false;
    }, 500);
  }
}
