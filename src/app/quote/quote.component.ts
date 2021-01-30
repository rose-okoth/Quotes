import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {author:'William James', quote:'Act as if what you do makes a difference. IT DOES.', username:''},
    {author:'William James', quote:'Success is not final, failure is not fatal: it is the COURAGE TO CONTINUE that counts.', username:''},
    {author:'William James', quote:'What you get by achieving your goals is not as important as what you become by achieving your goals.', username:''},    
    {author:'William James', quote:'Believe you can and you are halfway there.',username:''},
    {author:'William James', quote:'It is our attitude at the beginning of a difficult task which, ore than anything else will affect its successful outcome.', username:''},
    {author:'William James', quote:'Life is like riding a bicycle. To keep your BALANCE, you must keep moving.', username:''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
