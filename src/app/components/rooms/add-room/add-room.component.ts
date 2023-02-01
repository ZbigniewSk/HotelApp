import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRoomComponent {
  // @Input() rooms: RoomList[] = [];
  @Input() numberOfRooms: number = 0;
  @Output() onAddNewRoom: EventEmitter<RoomList> = new EventEmitter();

  addNewRoom() {
    const newRoom: RoomList = {
      number: 109,
      type: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 239,
      photos: 'https://unsplash.com/photos/WgkA3CSFrjc',
      checkinTime: new Date('12-Dec-2022'),
      checkoutTime: new Date('15-Dec-2022'),
      rating: 4.3,
    };
    this.onAddNewRoom.emit(newRoom);
    // this.rooms.push(newRoom);
    // this.numberOfRooms = this.rooms.length;
    // this.numberOfRooms += 1;
  }
}
