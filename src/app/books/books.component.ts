import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:any;
  constructor(public http:HttpClient) { }
  ngOnInit(): void {
    this.books = {
        name : "Sherlock",
        author: "Sir Aurthur Conan Doyle",
        title:"Sherlock Holmes",
        genre:"Crime",

    }
  }

}
