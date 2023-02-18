import { Injectable } from '@angular/core';
import { RoomList } from '../components/rooms/rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      number: 101,
      type: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/s4yfYIz964U',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating: 3.71234,
    },
    {
      number: 205,
      type: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://unsplash.com/photos/rEJxpBskj3Q',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('13-Nov-2022'),
      rating: 4.98768,
    },
    {
      number: 510,
      type: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://unsplash.com/photos/WgkA3CSFrjc',
      checkinTime: new Date('15-Nov-2022'),
      checkoutTime: new Date('19-Nov-2022'),
      rating: 2.87345,
    },
  ];

  constructor() {}

  getRooms() {
    return this.roomList;
  }
}
