import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  apidata:any;
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/authors")
    .subscribe((authors)=>{
      this.apidata = authors;
      console.log(this.apidata)
    })
  }

}
