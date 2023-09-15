import { Component, OnInit } from '@angular/core';
import { ModalController, PickerButton, PickerOptions } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  percentageValue!: any;
  canAdd = false;
  maxDate!: string;
  
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
  constructor(private modalCtrl: ModalController) {
    this.maxDate = this.getCurrentDate();
  }

  openModal() { }
  updateAddButtonState() {
    this.canAdd = /^0\.\d+$/.test(this.percentageValue);
  }

  getCurrentDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    return `${year}-${this.padNumber(month)}-${this.padNumber(day)}`;
  }

  padNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }

  ngOnInit(): void {

  }
}
