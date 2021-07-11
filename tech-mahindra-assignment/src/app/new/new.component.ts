import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private router:Router,private imageService:ImageService) { }

  ngOnInit() {
  }

  onSubmit(event){
    this.imageService.postImage({...event}).subscribe(data=>{
      alert("Image added successfully!")
      this.router.navigate(['home'])
    },err=>{
      alert("Failed to create Event.Please check server is running or not.")
    })
  }
  back()
  {
    this.router.navigate(['home'])
  }

}
