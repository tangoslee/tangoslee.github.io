import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/core/services';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  type = 'alert';
  show = false;
  alert: any;

  timeoutId: any;

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {

    // this.alert = {
    //   message: 'This is a test message',
    //   type: 'warning',
    // };

    this.appService.alert.subscribe(({message, type}) => {
      // console.log({message, type});
      if (!type) {
        type = 'alert-info';
      }

      this.alert = {message, type};
      this.show = true;
      this.timeoutId = setTimeout(() => this.show = false, 1500);
    });
  }

}
