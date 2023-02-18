import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';

import { localStorageToken } from 'src/app/services/localstorage.token';
import { RoomsService } from 'src/app/services/rooms.service';
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

  items?: any[];

  constructor(
    private roomsService: RoomsService,
    @Inject(localStorageToken) private localStorage: Storage
  ) {}

  ngOnInit(): void {
    this.rooms = { availableRooms: 10, bookedRooms: 5, totalRooms: 20 };

    this.roomList = this.roomsService.getRooms();
    this.numberOfRooms = this.roomList.length;

    // getNames();
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
