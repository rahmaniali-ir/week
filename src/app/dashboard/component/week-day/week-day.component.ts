import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weekday } from '../../type/weekday';
import { capitalize } from 'src/app/core/utils/string';

@Component({
  selector: 'week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.sass'],
})
export class WeekDayComponent {
  constructor(private route: ActivatedRoute) {}

  get weekday(): Weekday {
    return this.route.snapshot.data['weekday'];
  }

  get header() {
    return capitalize(this.weekday);
  }
}
