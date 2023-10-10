import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddmovieService } from 'src/app/addmovie.service';
import { MovieFetchService } from 'src/app/movie-fetch.service';
import { RatingService } from 'src/app/rating.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie-fetch',
  templateUrl: './movie-fetch.component.html',
  styleUrls: ['./movie-fetch.component.css']
})
export class MovieFetchComponent {
  list: any[] = []
  searchMovie: string = ''
  constructor(private router: Router, private addmovie: AddmovieService, private fetch: MovieFetchService, private rating: RatingService) { }

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

  delete(id: any) {
    this.fetch.deletemovie(id).subscribe((res: any) => {
      console.log('delete successful')

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })


      this.addmovie.getMovies().subscribe((res: any[]) => {
        console.log('Movies fetched:', res);
        this.list = res.map(movie => {
          const imageBase64 = this.arrayBufferToBase64(movie.image.data.data);
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
    })
  }
}
