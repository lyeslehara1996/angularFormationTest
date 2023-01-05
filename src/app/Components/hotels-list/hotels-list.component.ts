import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { IHotel } from 'src/app/Models/IHotel';
registerLocaleData(localeFr,'fr')
@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent {

public title="List hotels"
public showNouveau :boolean = false;
public hotelfilter="mot"


public hotel :IHotel[]=[
  {
        "hotelId": 1,
        "hotelName": "Buea sweet life",
        "description": "Belle vue au bord de la mer",
        "price": 230.5,
      "imageUrl": "../../../assets/images/indoors.jpg",
      //"imageUrl": "file:///C:/Users/pc/Desktop/Nouveau/AngPro/src/assets/images/hotel-room.jpg",  
      "rating": 3.5,
        "showNouveau":false
        
  },
  {
        "hotelId": 2,
        "hotelName": "Marakech",
        "description": "Profitez de la vue sur les montagnes",
        "price": 145.5,
           "imageUrl": "../../../assets/images/indoors.jpg",
         // "imageUrl": "file:///C:/Users/pc/Desktop/Nouveau/AngPro/src/assets/images/indoors.jpg",
           "rating": 5,
        "showNouveau":true
        
  },
  {
        "hotelId": 3,
        "hotelName": "Abudja new look palace",
        "description": "Séjour complet avec service de voitures",
        "price": 120.12,
        "imageUrl": "../../../assets/images/the-interior.jpg",
         // "imageUrl": "file:///C:/Users/pc/Desktop/Nouveau/AngPro/src/assets/images/the-interior.jpg",
        "rating": 4,
        "showNouveau":false
        
  },
  {
        "hotelId": 4,
        "hotelName": "Cape town city",
        "description": "Magnifique cadre pour votre séjour",
        "price": 135.12,
           "imageUrl": "../../../assets/images/window.jpg",
         // "imageUrl": "file:///C:/Users/pc/Desktop/Nouveau/AngPro/src/assets/images/window.jpg",
           "rating": 2.5,
        "showNouveau":true
        
  }
]

afficherNouveau(){
this.showNouveau = !this.showNouveau
}

}
