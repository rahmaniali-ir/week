import { NgModule } from '@angular/core';
import { DashboardOutletComponent } from './component/dashboard-outlet/dashboard-outlet.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { TodayTasksComponent } from './component/today-tasks/today-tasks.component';
import { ActivityListComponent } from './component/activity-list/activity-list.component';
import { ActivityGroupComponent } from './component/activity-group/activity-group.component';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { WeekDayComponent } from './component/week-day/week-day.component';
import { AddActivityGroupModalComponent } from './component/add-activity-group-modal/add-activity-group-modal.component';

@NgModule({
  declarations: [
    DashboardOutletComponent,
    SideBarComponent,
    NavBarComponent,
    TodayTasksComponent,
    ActivityListComponent,
    ActivityGroupComponent,
    PageHeaderComponent,
    WeekDayComponent,
    AddActivityGroupModalComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    CoreModule,
  ],
  providers: [],
})
export class DashboardModule {}
