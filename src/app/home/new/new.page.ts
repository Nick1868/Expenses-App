import { Component, OnInit } from '@angular/core';
import { NewService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PhotoService } from '../photo.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  form: FormGroup;
  runningTotal: number;
  value: number;

  update(value) {
    const timestamp: string = new Date().toLocaleString('en-GB');
    const amount = value;
    this.value = value;
    this.photoService.addPhoto(timestamp, amount);
    this.newService.updateTotal(this.form.value.amount);
    this.storage.set(
      'detail', this.value);
    this.form.reset();  
  }


  constructor(public photoService: PhotoService, private route: ActivatedRoute, public newService: NewService, private router: Router, private storage: Storage) {
    this.storage.get('detail').then((total) => {
      this.value = total;
  });
  }

  ngOnInit() {
    this.form = new FormGroup({
      amount: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }
}
