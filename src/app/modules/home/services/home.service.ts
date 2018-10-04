import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService, AppService } from '@app/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private apiService: ApiService,
    private appService: AppService,
  ) { }

  init() {
    this.apiService.get(`${environment.BASE_HREF}/assets/api/init.json`)
      .subscribe(data => {
        const { maintenance } = data;
        // console.log({maintenance});
        this.appService.setMaintenance(maintenance);
      }, err => {
        console.error(err);
      });
  }

  send({email, message}) {
    return this.apiService.post(`${environment.CONTACT_HOST}/contactsmlee`, {
      to: 'smlee',
      from: email,
      body: message
    });
  }

}
