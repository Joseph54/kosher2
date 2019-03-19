import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurant';
import {Observable, of} from 'rxjs';
import {Address} from '../address';
import {Review} from '../Review';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Restaurant[];
  location: Address;
  constructor() {
    // TODO: Replace with API call
    this.restaurants = [
      new Restaurant({
        name: 'Pizza Pita',
        phone: '(514) 234-1254',
        website: 'www.pizapita.com',
        rating: 6,
        avgMealPrice: 15,
        location: new Address ({
          streetNumber: 2382,
          streetName: 'van horne',
          city: "montreal",
          Province: 'QC',
          Country: 'Canada'
        }),
        review: new Review({
            review: 'best restaurant ever!!'
        })
      }),
      new Restaurant({
        name: 'KFC',
        website: 'https://www.kfc.com',
        rating: 2,
        avgMealPrice: 50,
        location: new Address({
          streetNumber: 4529,
          streetName: 'mounain-sights',
          city: 'Cote-saint-luc',
          province: 'QC',
          postalCode: 'G5W2H6',
          country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'pizza hut',
        phone: '514-354-5748',
        rating: 1,
        avgMealPrice: 10,
        location: new Address({
          streetNumber: 4675,
          streetName: 'cavandish',
          city: 'cote-saint-luc',
          province: 'QC',
          postalCode: 'H4W3W6',
          country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'Tav Cafe',
        phone: '(514) 674-9894',
        website: 'http://cafetav.com/',
        rating: 4,
        avgMealPrice: 23,
        location: new Address ({
          streetNumber: 4928,
          streetName: 'cote-saint-cathrine',
          city: "Montreal",
          province: "QC",
          PostalCode: "h4w2y2",
          Province: 'QC',
          Country: 'Canada'
        })
      }),

    ];
  }

  // region Getters
  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
  }
  // endregion
}

