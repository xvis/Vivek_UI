import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'First time push code to Github Action !!!';
   fruits = ["Banana", "Orange", "Apple", "Mango"];
  constructor() {
    // Constructor is used for dependency injection or basic initialization.
  }
   ngOnInit(){
    console.log(this.fruits.length)
  }

}
