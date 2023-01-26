import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {
  name: string;
  pushToggle: boolean;
  newsletterToggle: boolean;
  counter = 0;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  countUp(){
    this.counter += 1;
  }

  reset(){
    this.counter = 0;
  }

  save(){
    this.storageService.set("1", this.counter);
  }

  async load(){
    this.counter = await this.storageService.get("1");
  }
}
