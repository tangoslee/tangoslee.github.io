import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() { }

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  // https://alligator.io/angular/location-service/
  ngAfterViewInit() {
    try {
      const [path] = this.location.path().replace(/^\//, '').split('/');

      if (path) {
        const element = document.querySelector(`#${path}`);
        // console.log({path, element});
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } catch (e) {
      // console.error({ e });
    }
  }

}
