import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, AppService } from '@app/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-portfolio-body',
  templateUrl: './portfolio-body.component.html',
  styleUrls: ['./portfolio-body.component.scss']
})
export class PortfolioBodyComponent implements OnInit {

  html = '';
  path = '';
  show = false;

  sub: any = null;

  constructor(
    private apiService: ApiService,
    private appService: AppService,
    private location: Location,
    private router: Router,
  ) {
    // GET /portfolio/:path
    const path = this.location.path();
    const match = /\/portfolio\/(\S+)/.exec(path);
    if (match && match[1]) {
      this.getPages(match[1]);
    }
  }

  ngOnInit() {}

  getPages(key: string = '') {
    // console.log({ key });
    // https://angular.io/guide/http#requesting-non-json-data
    const options = {
      responseType: 'text',
      headers: {
        'Content-type': 'text/html; charset=utf-8'
      }
    };

    if (!key) {
      return;
    }

    // this.appService.loading();
    this.apiService.get(`/assets/pages/${key}.html`, {}, options)
      .subscribe(data => {
        // console.log({ data });
        this.html = data;
        this.show = true;
        // this.appService.unloading();
      }, err => {
        console.error({ err });
        this.show = false;
        // this.html = '';
        // this.appService.unloading();
      });
  }

  close() {
    this.show = false;
    this.router.navigate(['/portfolio']);
  }
}
