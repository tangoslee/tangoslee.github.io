import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { HomeService } from '@app/modules/home';
@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.scss']
})
export class NavibarComponent implements OnInit {

  shrink = true;

  @ViewChild('mainNav') mainNav: ElementRef;

  constructor(
    private homeService: HomeService,
  ) {
    this.homeService.init();
  }

  ngOnInit() {
    this.initMainNavTop();
  }

  // Collapse Navbar
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.initMainNavTop();
  }

  // https://stackoverflow.com/questions/45446912/angular-4-scroll-element-offset-top-value?rq=1
  initMainNavTop() {
    try {
      const rect = this.mainNav.nativeElement.getBoundingClientRect();
      const top = rect.top + window.pageYOffset - document.documentElement.clientTop;
      // console.log({ top });

      if (top > 100) {
        this.shrink = true;
      } else {
        this.shrink = false;
      }
    } catch (e) { }
  }
}
