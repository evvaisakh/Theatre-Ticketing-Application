import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieFetchService } from 'src/app/movie-fetch.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  list={
    id:'',
    moviename:'',
    category:'',
    languages:'',
    cast:'',
    description:'',
    time:'',
    screen:'',
    rates:'',
    seats:'',
  }

  constructor(private fetch:MovieFetchService,private router:Router,private activatedRoute:ActivatedRoute){}


  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    this.fetch.getMovieById(id).subscribe((res:any)=>{
      console.log('calling service')
      this.list.id=res.data._id;
      this.list.moviename=res.data.moviename;
      this.list.category=res.data.category;
      this.list.languages=res.data.languages;
      this.list.cast=res.data.cast;
      this.list.description=res.data.description;
      this.list.time=res.data.time;
      this.list.screen=res.data.screen;
      this.list.rates=res.data.rates;
      this.list.seats=res.data.seats;
      
    })
    
  }

  update(){
    this.fetch.editdetails(this.list,this.list.id).subscribe(
      (data)=>{
        console.log('success')
      }
    );
    this.router.navigate(["/AdminDash/movie-fetch"])
  
  }
}
