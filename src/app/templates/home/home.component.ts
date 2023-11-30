import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.data = this.homeService.getData();
    this.homeService.subscribeToData((newData) => {
      this.data = newData;
    });
  }
}
