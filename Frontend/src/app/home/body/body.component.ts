import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddmovieService } from 'src/app/addmovie.service';
import { RatingService } from 'src/app/rating.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  list: any[] = []
  constructor(private router: Router, private addmovie: AddmovieService, private rating: RatingService) { }
  ngOnInit() {
    this.addmovie.getMovies().subscribe((res: any[]) => {
      console.log('Movies fetched:', res);
      this.list = res.map(movie => {
        const imageBase64 = this.arrayBufferToBase64(movie.image.data.data);
        movie.averageRating = this.rating.getAverageRating(movie._id); // Calculate average rating and assign it directly
        return {
          ...movie,
          image: `data:${movie.image.contentType};base64,${imageBase64}`
        };
      });
    },
      (error) => {
        console.error(`Error fetched requirements:`, error)

      }
    )
  }

  arrayBufferToBase64(buffer: ArrayBuffer) {
    const binary = new Uint8Array(buffer);
    let base64 = '';
    binary.forEach(byte => {
      base64 += String.fromCharCode(byte);
    });
    return btoa(base64);
  }
}

