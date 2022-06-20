import { UserTypeService } from 'src/app/services/user-type.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css'],
})
export class ItemsTableComponent implements OnInit {
  @Input() tableContent: any;
  @Output() deletedItem = new EventEmitter();
  @Output() editedItem = new EventEmitter();
   user:string
  constructor(private userType:UserTypeService) {
    this.user=userType.getUserType();
  }

  ngOnInit(): void {}

  deleteItem(deletedId: number) {
    this.deletedItem.emit(deletedId);
  }
  edit(itemIndex:any){
   this.editedItem.emit(itemIndex)
  }
  
}
