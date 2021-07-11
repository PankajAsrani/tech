import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  getImages(){
    return this.http.get<Image[]>("http://localhost:8080/images")
  }

  getImage(id){
    return this.http.get<Image>("http://localhost:8080/images/"+id)
  }

  postImage(obj){
    return this.http.post("http://localhost:8080/images",obj);
  }
  
}
