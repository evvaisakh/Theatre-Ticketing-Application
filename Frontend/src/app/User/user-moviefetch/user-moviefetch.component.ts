import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddmovieService } from 'src/app/addmovie.service';
import { MovieFetchService } from 'src/app/movie-fetch.service';
import { RatingService } from 'src/app/rating.service';

@Component({
  selector: 'app-user-moviefetch',
  templateUrl: './user-moviefetch.component.html',
  styleUrls: ['./user-moviefetch.component.css']
})
export class UserMoviefetchComponent {
  list: any[] = [];
  userId: string | null = null;
  searchMovie: string = ''
  constructor(private router: Router, private addmovie: AddmovieService, private route: ActivatedRoute, private fetching: MovieFetchService, private rating: RatingService) { }
  ngOnInit() {

    this.addmovie.getMovies().subscribe((res: any[]) => {
      console.log('Movies fetched:', res);
      this.list = res.map(movie => {
        const imageBase64 = this.arrayBufferToBase64(movie.image.data.data);
        movie.averageRating = this.rating.getAverageRating(movie._id); // Calculate average rating and assign it directly
        return {
          ...movie,
          image: `data:${movie.image.contentType};base64,${imageBase64}`,

        };

      }
      );

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
