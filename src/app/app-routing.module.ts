import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { PatientsComponent } from './patients/patients.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'meetings', component: MeetingsComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, ProfileComponent] 
