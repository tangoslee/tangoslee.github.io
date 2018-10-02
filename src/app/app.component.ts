import { Component } from '@angular/core';
import { AppService } from '@app/core';
import { HomeService } from '@app/modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  maintenance;

  constructor(
    private appService: AppService,
    private homeService: HomeService,
  ) {
    this.homeService.init();

    this.appService.maintenance
      .subscribe(data => this.maintenance = data);
  }

}
