import { Component, Input } from '@angular/core';
import { IconName } from 'src/app/core/component/i-con/icons';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.sass'],
})
export class PageHeaderComponent {
  @Input() icon?: IconName;
  @Input() header: string = '';
}
