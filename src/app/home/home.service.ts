import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  public runningTotal = 0;

  updateTotal(amount: number) {
    this.runningTotal += amount;
    this.storage.set(
          'total', this.runningTotal);
  }

  constructor(private storage: Storage) {
    this.storage.get('total').then((total) => {
        this.runningTotal = total;
    });
  }


}
