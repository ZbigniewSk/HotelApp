import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent implements OnInit {
  hotelName = 'Gulugulu Hotel';
  numberOfRooms: number = 0;
  hideRooms = true;

  rooms: Room = { availableRooms: 0, bookedRooms: 0, totalRooms: 0 };
  roomList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.rooms = { availableRooms: 10, bookedRooms: 5, totalRooms: 20 };

    this.roomList = [
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
    this.numberOfRooms = this.roomList.length;
    // console.log('init', this.numberOfRooms);
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(roomNumber: number) {
    console.log(roomNumber);
  }

  addNewRoom(newRoom: RoomList) {
    // this.roomList.push(newRoom);
    this.roomList = [...this.roomList, newRoom];
    this.numberOfRooms = this.roomList.length;
  }
}
