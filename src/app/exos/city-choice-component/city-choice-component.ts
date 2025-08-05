import { Component } from '@angular/core';

type City = {
  name: string,
  country: string,
  image: string,
}

@Component({
  selector: 'exo-city',
  standalone: false,
  templateUrl: './city-choice-component.html',
  styleUrl: './city-choice-component.css'
})

export class CityChoiceComponent {
  cities: City[] = [
    {
      name: "Turin",
      country: "Italie",
      image: "https://tourismmedia.italia.it/is/image/mitur/20220223132855-piazza-san-carlo-torino-piemonte-shutterstock-2102981095-rid-1?wid=960&hei=660&fit=constrain,1&fmt=webp"
    },
    {
      name: "Paris",
      country: "France",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/330px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
    },
  ]

  cityIndex: number = 0;
  cityName: string = "";
  cityCountry: string = "";
  cityImage: string = "";
  value: number = 0;


  showCity(e: any) {
    this.cityIndex = e.target.value;
    this.cityName = this.cities[this.cityIndex].name;
    this.cityCountry = this.cities[this.cityIndex].country;
    this.cityImage = this.cities[this.cityIndex].image;
  }
}
