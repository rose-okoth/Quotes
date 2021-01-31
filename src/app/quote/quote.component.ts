import { Component, OnInit,} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,'C.S Lewis', 'You are never too old to set another goal or to dream a new dream.', 'Danny Williams', new Date(2020,7,28)),
    new Quote(2, 'Winston Churchill', 'Success is not final, failure is not fatal: it is the courage to continue that counts.', 'Johnny Turturro', new Date(2020,7,28)),
    new Quote(3,'Zig Ziglar', 'What you get by achieving your goals is not as important as what you become by achieving your goals.', 'Tripp Vanderbilt', new Date(2020,8,28)),    
    new Quote(4,'Deep Roy', 'Inspiration comes from within yourself. One has to be positive. When you are positive, good things happen.','Rio Christopher', new Date(2020,4,20)),
    new Quote(5,'William James', 'It is our attitude at the beginning of a difficult task which, ore than anything else will affect its successful outcome.', 'Nate Archibald',new Date(2019,7,28)),
    new Quote(6,'Maya Angelou', 'Try to be a rainbow in someone elses cloud.', 'Chuck Bass', new Date(2020,5,21))
  ];

  deleteQuote(isComplete: any, index: any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  toggleDetails(index: any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
