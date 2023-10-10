import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashComponent } from './Admin/admin-dash/admin-dash.component';
import { MovieFetchComponent } from './Admin/movie-fetch/movie-fetch.component';
import { AddMoviesComponent } from './Admin/add-movies/add-movies.component';
import { EditComponent } from './Admin/edit/edit.component';
import { BookingsComponent } from './Admin/bookings/bookings.component';
import { adminGuard } from './admin.guard';
import { userGuard } from './user.guard';
import { UserDashComponent } from './User/user-dash/user-dash.component';
import { UserMoviefetchComponent } from './User/user-moviefetch/user-moviefetch.component';
import { MovieDetailComponent } from './User/movie-detail/movie-detail.component';
import { TktBookingComponent } from './User/tkt-booking/tkt-booking.component';
import { MybookingsComponent } from './User/mybookings/mybookings.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // User Dashboard
  {
    path: 'UserDash', canActivate: [userGuard],
    component: UserDashComponent,
    children: [
      { path: 'user-moviefetch', component: UserMoviefetchComponent },
      { path: 'moviedetail/:id', component: MovieDetailComponent },
      { path: 'tktbooking/:id', component: TktBookingComponent },
      { path: 'mybooking/:user', component: MybookingsComponent },
      { path: '', redirectTo: 'user-moviefetch', pathMatch: 'full' },
    ],
  },
  
  // Admin Dashboard
  {
    path: 'AdminDash', canActivate: [adminGuard],
    component: AdminDashComponent,
    children: [
      { path: 'movie-fetch', component: MovieFetchComponent },
      { path: 'movie-fetch/add-movies', component: AddMoviesComponent },
      { path: 'editdetails/:id', component: EditComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: '', redirectTo: 'movie-fetch', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
