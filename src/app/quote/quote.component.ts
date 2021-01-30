import { Component, OnInit,} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('William James', 'Act as if what you do makes a difference. IT DOES.', 'Danny Williams'),
    new Quote('Winston Churchill', 'Success is not final, failure is not fatal: it is the COURAGE TO CONTINUE that counts.', 'Johnny Turturro'),
    new Quote('Zig Ziglar', 'What you get by achieving your goals is not as important as what you become by achieving your goals.', 'Tripp Vanderbilt'),    
    new Quote('Theodore Roosevelt', 'Believe you can and you are halfway there.','Rio Christopher'),
    new Quote('William James', 'It is our attitude at the beginning of a difficult task which, ore than anything else will affect its successful outcome.', 'Nate Archibald'),
    new Quote('Albert Einstein', 'Life is like riding a bicycle. To keep your BALANCE, you must keep moving.', 'Chuck Bass'),
  ];

  toggleDetails(index: any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
