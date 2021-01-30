import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  constructor(){
    this.quotes = [
      'Act as if what tyou do makes a difference. IT DOES.', 
      'Success is not final, failure is not fatal: it is the COURAGE TO CONTINUE that counts.', 
      'What you get by achieving your goals is not as important as what you become by achieving your goals.',
      'Believe you can and you are halfway there.',
      'It is our attitude at the beginning of a difficult task which, ore than anything else will affect its successful outcome.',
      'Life is like riding a bicycle. To keep your BALANCE, you must keep moving.'
    ]
  } 
}