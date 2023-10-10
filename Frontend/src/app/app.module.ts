import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { BodyComponent } from './home/body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AddmovieService } from './addmovie.service';
import { RatingService } from './rating.service';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { AdminDashComponent } from './Admin/admin-dash/admin-dash.component';
import { AddMoviesComponent } from './Admin/add-movies/add-movies.component';
import { BookingsComponent } from './Admin/bookings/bookings.component';
import { EditComponent } from './Admin/edit/edit.component';
import { MovieFetchComponent } from './Admin/movie-fetch/movie-fetch.component';
import { MinFooterComponent } from './home/min-footer/min-footer.component';
import { UserDashComponent } from './User/user-dash/user-dash.component';
import { UserMoviefetchComponent } from './User/user-moviefetch/user-moviefetch.component';
import { MybookingsComponent } from './User/mybookings/mybookings.component';
import { MovieDetailComponent } from './User/movie-detail/movie-detail.component';
import { TktBookingComponent } from './User/tkt-booking/tkt-booking.component';
import { SearchPipe } from './search.pipe';
import { MovieFetchService } from './movie-fetch.service';
import { BookingService } from './booking.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    AdminDashComponent,
    AddMoviesComponent,
    BookingsComponent,
    EditComponent,
    MovieFetchComponent,
    MinFooterComponent,
    UserDashComponent,
    UserMoviefetchComponent,
    MybookingsComponent,
    MovieDetailComponent,
    TktBookingComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [AuthService,
    AddmovieService,
    MovieFetchService,
    RatingService,
    BookingService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokeninterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
