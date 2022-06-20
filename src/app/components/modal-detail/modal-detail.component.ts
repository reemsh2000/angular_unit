import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UserTypeService } from 'src/app/services/user-type.service';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.css'],
})
export class ModalDetailComponent implements OnChanges {
  @Output() closeDetailModal = new EventEmitter();
  @Output() getItem: any = new EventEmitter();
  @Input() modalData: any;
  user: string;

  showErrorMsg = false;
  modal: any = {
    progress: 0,
    location: 'location1',
    description: '',
  };
  constructor(private userType: UserTypeService) {
    this.user = this.userType.getUserType();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.modalData.description) {
      this.modal = { ...this.modalData };
    } else {
      this.modal = {
        progress: 0,
        location: 'location1',
        description: '',
      };
    }
  }

  close() {
    this.closeDetailModal.emit(false);
  }
  //  To add new Item and edit 
  submitForm(item: any) {
    this.showErrorMsg = false;
    const { description, progress, location } = this.modal;
    if (description && location && progress >= 0) {
      if(this.modalData){
        this.getItem.emit({...this.modal,'edit':true});

      }
      else  this.getItem.emit({...this.modal,'edit':false});
      this.closeDetailModal.emit(false);
    } else {
      this.showErrorMsg = true;
    }
  }
}
