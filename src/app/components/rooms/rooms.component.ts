import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'Gulugulu Hotel';
  numberOfRooms = 10;
  hideRooms = true;
  rooms: Room = { availableRooms: 10, bookedRooms: 5, totalRooms: 20 };

  tableHeader = [
    'Number',
    'Type',
    'Price',
    'Amenities',
    'Checkin Time',
    'Checkout Time',
    'Rating',
  ];

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

  tableContent: any[][] = this.roomList.map((v) => [
    v.number,
    v.type,
    v.price,
    v.amenities,
    v.checkinTime,
    v.checkoutTime,
    v.rating,
  ]);

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
