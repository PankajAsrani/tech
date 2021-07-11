import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageList:Image[]=[];
  constructor(private router:Router,private imageService:ImageService) { }

  ngOnInit() {
    this.imageService.getImages().subscribe(data=>{
      this.imageList=data;
    })
    // this.imageList.push({
    //   id:1,
    //   name:'PLOS',
    //   url:'https://plos.org/wp-content/uploads/2020/07/abstract-image_color-tone-1120x630.jpg',
    //   details:'Images may be subject to copyright jhbfjhsdf b dfjhbd hdbf dfkhbdfb gdfbgidfb '
    // },{
    //   id:2,
    //   name:'Medical express',
    //   url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7bLYgzPsdUnvOJaOp4NGOVZQ71A-3be2gpW-ycORp3bprAxtOg-Ib8ECcrmHMzZitzw&usqp=CAU',
    //   details:'Images may be subject to copyright'
    // },{
    //   id:3,
    //   name:'PLOS',
    //   url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKurvGSO-UOJk3g2uRlBh6ccKNKWR4JjMk3w&usqp=CAU',
    //   details:'Images may be subject to copyright'
    // },{
    //   id:4,
    //   name:'PLOS',
    //   url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcP20iL6mfIZJQYqyAy_ZJM7-MAO1HVUEn2le8VxwDf-me9SHP&usqp=CAU',
    //   details:'Images may be subject to copyright'
    // },{
    //   id:5,
    //   name:'PLOS',
    //   url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG60zK1zfSYq5rlPFVVsI_BrFCT0Ah59NDQ&usqp=CAU',
    //   details:'Images may be subject to copyright jhbfjhsdf b dfjhbd hdbf dfkhbdfb gdfbgidfb '
    // })
  }

  showInfo(id){
    this.router.navigate(['show',id])
  }
  navigateToNew(){
    this.router.navigate(['new'])
  }

}
export interface Image{
  id:number
  name:string,
  url:string,
  details:string
}