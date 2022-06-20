import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { UserTypeService } from '../../services/user-type.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  modalStatus: boolean = false;
  user: string;
  modal: any = {
    progress: 0,
  };
  private workOrder = new BehaviorSubject<any[]>([]);
  public workOrder$ = this.workOrder.asObservable();
  constructor(private userType: UserTypeService, private data: DataService) {
    this.user = userType.getUserType();
    this.workOrder.next(this.data.getData());
  }

  ngOnInit(): void {
    this.userType;
  }
  openModal() {
    this.modalStatus = true;
  }
  closeModal() {
    this.modalStatus = false;
    this.workOrder.next(this.data.getData());
    this.modal = {
      progress: 0,
    };
  }
  edit(item: any) {
    this.modal = { ...item };
    this.openModal();
  }
}
