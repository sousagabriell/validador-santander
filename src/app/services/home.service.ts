import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private data: any = []; // Nossos dados simulados
  private dataSubject = new Subject<any>();

  getData() {
    return this.data;
  }

  updateData(newData: any) {
    this.data = newData;
    this.dataSubject.next(this.data);
  }

  subscribeToData(callback: (data: any) => void) {
    this.dataSubject.subscribe(callback);
  }
}
