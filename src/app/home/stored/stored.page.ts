import { Component, OnInit } from '@angular/core';
import { NewService } from '../home.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-stored',
  templateUrl: './stored.page.html',
  styleUrls: ['./stored.page.scss'],
})
export class StoredPage implements OnInit {
  photos = this.photoService.photos;

  constructor(public photoService: PhotoService, private route: ActivatedRoute, private navCtrl: NavController, private newService: NewService) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }


}
