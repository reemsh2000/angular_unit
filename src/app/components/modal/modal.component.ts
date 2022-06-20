import { UserTypeService } from './../../services/user-type.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnChanges {
  @Output() closeModal = new EventEmitter();
  @Input() modalData: any;
  user: string;
  items: any = [];
  modalDetails: boolean = false;
  showErrorMsg: boolean = false;
  modal: any = {};
  item: any;
  editedItemId: number | undefined = undefined;

  constructor(private data: DataService, private userType: UserTypeService) {
    this.user = this.userType.getUserType();
    if (!this.modalData?.headers) {
      this.modal['orderid'] = `order${this.data.getLastOrderId()}`;
    }
  }
  ngOnInit(): void {}
  // Set values if the modal on the edit mode
  ngOnChanges(changes: SimpleChanges): void {
    if (this.modalData?.headers) {
      this.modal = { ...this.modalData.headers };
      this.items = [...this.modalData.description];
    }
  }
  // Close the modal
  close() {
    this.closeModal.emit(false);
  }
  // Open & close modal deitals
  openModalDetails() {
    this.modalDetails = true;
  }
  closeModalDetils() {
    this.modalDetails = false;
  }
  // save new Item
  saveItem(item: any) {
    const { progress, location, description, edit } = item;
    const newItem = { progress, location, description };
    if (edit) this.items[this.editedItemId || 0] = newItem;
    else this.items.push(item);
  }
  // editItem
  editItem(itemId: any) {
    this.editedItemId = itemId;
    this.item = this.items[itemId];
    this.openModalDetails();
  }
  // Delete
  deleteItem(itemId: number) {
    const itemsAfterDelete = this.items.filter(
      (item: any, index: number) => index != itemId
    );
    this.items = [...itemsAfterDelete];
  }
  addWorkOrder() {
    const { creationdate, endDate, operationDesc, progress, startDate } =
      this.modal;
    if (
      creationdate &&
      endDate &&
      operationDesc &&
      progress >= 0 &&
      startDate
    ) {
      const newWorkItem = {
        headers: this.modal,
        description: this.items,
      };

      if (this.modalData.headers) {
        this.data.updateData(newWorkItem);
      } else {
        this.data.addData(newWorkItem);
      }
      this.close();
    } else {
      this.showErrorMsg = true;
    }
  }
}
