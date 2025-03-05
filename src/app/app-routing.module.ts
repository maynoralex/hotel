import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "list", loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule), component: ReservationListComponent},
  {path: "new", loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule), component: ReservationFormComponent},
  {path: "edit/:id", loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule), component: ReservationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
