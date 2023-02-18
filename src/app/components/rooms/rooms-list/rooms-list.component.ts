import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit {
  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom: EventEmitter<number> = new EventEmitter();

  tableHeader: string[] = [''];
  tableContent: any[][] = [[]];
  hideTable: boolean = true;
  oldLength: number = 0;

  ngOnInit(): void {
    this.tableHeader = [
      'Number',
      'Type',
      'Price',
      'Amenities',
      'Checkin Time',
      'Checkout Time',
      'Rating',
      'Select Room',
    ];
    this.tableContent = this.rooms.map((v) => [
      v.number,
      v.type,
      v.price,
      v.amenities,
      v.checkinTime,
      v.checkoutTime,
      v.rating,
    ]);
  }
  // ngDoCheck call after any change in app
  // ngDoCheck() {
  //   // console.log(this.rooms);
  //   if (this.rooms.length !== this.oldLength) {
  //     this.oldLength = this.rooms.length;
  //     this.tableContent = this.rooms.map((v) => [
  //       v.number,
  //       v.type,
  //       v.price,
  //       v.amenities,
  //       v.checkinTime,
  //       v.checkoutTime,
  //       v.rating,
  //     ]);
  //   }
  // }

  // ngOnChanges call after @Input change in this component (must change reference
  // not only value - deep copy)
  ngOnChanges(changes: SimpleChanges): void {
    const newRooms: RoomList[] = changes['rooms'].currentValue;
    // console.log(newRooms);
    this.tableContent = newRooms.map((v) => [
      v.number,
      v.type,
      v.price,
      v.amenities,
      v.checkinTime,
      v.checkoutTime,
      v.rating,
    ]);
  }

  ngOnDestroy() {
    // console.log('koniec room-list');
  }

  toggleTable(): void {
    this.hideTable = !this.hideTable;
  }

  selectRoom(roomNumber: number) {
    this.selectedRoom.emit(roomNumber);
  }
}
