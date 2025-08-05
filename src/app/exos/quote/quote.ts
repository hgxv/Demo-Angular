import { Component } from '@angular/core';

type Quote = {
  quote: string;
  author: string;
}

@Component({
  selector: 'exo-quote',
  standalone: false,
  templateUrl: './quote.html',
  styleUrl: './quote.css'
})


export class QuoteComponent {
  quotes: Quote[] = [
    {
      quote: "La femme est l'avenir de l'homme",
      author: "Aragon"
    },
    {
      quote: "The world is yours",
      author: "Toni Montana"
    },
    {
      quote: "Ad astra per aspera",
      author: "Inconnu"
    },
  ];

  indexQuote: number = 0;
  
  constructor() {
    setInterval(() => {
      this.selectQuote();
    }, 500)
  }


  selectQuote() {
    let randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.indexQuote = randomIndex;
    console.log(this.quotes[this.indexQuote]);
  }
}
