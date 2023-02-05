import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardOutletComponent } from './component/dashboard-outlet/dashboard-outlet.component';
import { weekdays } from './const/weekdays';
import { TodayTasksComponent } from './component/today-tasks/today-tasks.component';
import { ActivityListComponent } from './component/activity-list/activity-list.component';
import { WeekDayComponent } from './component/week-day/week-day.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardOutletComponent,
    children: [
      {
        path: 'today',
        component: TodayTasksComponent,
      },
      {
        path: 'activities',
        component: ActivityListComponent,
      },
      {
        path: 'weekday',
        children: [
          ...weekdays.map((weekday) => ({
            path: weekday,
            component: WeekDayComponent,
            data: { weekday },
          })),
          {
            path: '**',
            redirectTo: 'saturday',
          },
        ],
      },
      {
        path: '**',
        redirectTo: 'today',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'today',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
