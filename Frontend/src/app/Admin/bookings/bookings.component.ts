import { Component } from '@angular/core';
import { BookingService } from 'src/app/booking.service';
import { MovieFetchService } from 'src/app/movie-fetch.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  bookedTickets: any[] = [];
  
  constructor(private booking:BookingService,private fetch:MovieFetchService){ }

  ngOnInit(): void {
    this.booking.getBookedTickets().subscribe(
      (data:any)=>{
        this.bookedTickets=data;
      },
      (error: any) => {
        console.error('Error fetching booked tickets:', error);
      }
    );
  }
}
