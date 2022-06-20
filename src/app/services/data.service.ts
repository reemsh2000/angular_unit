import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: any;
  constructor() {}
  addData(dataItem: any) {
    let dataArray = [];
    let oldData = JSON.parse(localStorage.getItem('workOrder') || '[]');
    if (oldData.length !== 0) {
      oldData.push(dataItem);
      localStorage.setItem('workOrder', JSON.stringify(oldData));
    } else {
      dataArray.push(dataItem);
      localStorage.setItem('workOrder', JSON.stringify(dataArray));
    }
  }

  getData(): any[] {
    return JSON.parse(localStorage.getItem('workOrder') || '[]');
  }
  getLastOrderId() {
    const data = this.getData();
    return data.length ? data.length : 0;
  }

  updateData(item: any) {
    const data = this.getData();
    const objIndex = data.findIndex(
      (obj) => obj.headers.orderid == item.headers.orderid
    );
    data[objIndex] = item;
    localStorage.setItem('workOrder', JSON.stringify(data));
  }
}
