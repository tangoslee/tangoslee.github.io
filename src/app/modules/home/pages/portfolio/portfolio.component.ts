import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  workshops = [
    {
      id: 'sociallogin2018',
      thumb: 'assets/img/workshop/social-login/social-login_400x300.png',  /*400x300*/
      title: 'Social Login',
      desc: '2018 | A Ticket Commerce Site',
    },
    // {
    //   id: 'fakeshop',
    //   thumb: 'assets/img/workshop/fakeshop_400x300.png',  /*400x300*/
    //   title: 'Fakeshop Website',
    //   desc: '2018 | Workshop',
    // },
    {
      id: 'workshop1',
      thumb: 'assets/img/workshop/workshop1_400x300.png',  /*400x300*/
      title: 'Personal website',
      desc: '2018 | Workshop',
    },
    {
      id: 'dashboard2017',
      thumb: 'assets/img/workshop/Dashboard2017_400x300.png',
      title: 'Dashboard',
      desc: '2017 | Project',
    },
    {
      id: 'cyeditor2015',
      thumb: 'assets/img/workshop/cyworld-editor-pc_400x300.png',
      title: 'PC Web Editor',
      desc: '2015 | Project',
      icon: '',
      color: {},
    },
    {
      id: 'postpublisher2015',
      thumb: 'assets/img/workshop/post-publisher_400x300.png',
      title: 'Post Publisher',
      desc: '2015 | Project',
      icon: '',
      color: {},
    },
    {
      id: 'tokudb2015',
      thumb: '',
      title: 'Migration',
      desc: '2015 | Project',
      icon: 'fa fa-truck fa-5x-icon',
      color: {},
    },
    {
      id: 'fontrix2015',
      thumb: '',
      title: 'Image Font Generator',
      desc: '2015 | Project',
      icon: 'fa fa-font fa-5x-icon',
      color: { 'backgroundColor': '#6ca0ff' },
    },
    {
      id: 'remember2014',
      thumb: 'assets/img/workshop/Remember2014_400x300.jpg',
      title: 'Remember Project',
      desc: '2014 | Project',
      icon: '',
      color: {},
    },
    {
      id: 'cyrang2012',
      thumb: 'assets/img/workshop/Cyrang2012_400x300.jpg',
      title: 'Cyrang Project',
      desc: '2012 | Project',
      icon: '',
      color: {},
    },
    {
      id: 'blogdog2009',
      thumb: 'assets/img/workshop/Blogdog2009_400x300.jpg',
      title: 'BlogDog Project',
      desc: '2009 | Project',
      icon: '',
      color: {},
    },

    // {
    //   id: 'workshop2',
    //   thumb: 'img/portfolio/02-thumbnail.jpg',
    //   title: 'Workshop2',
    //   desc: 'Graphic Design',
    // },
    // {
    //   id: 'portfolioModal3',
    //   thumb: 'img/portfolio/03-thumbnail.jpg',
    //   title: 'Finish',
    //   desc: 'Identity',
    // },
    // {
    //   id: 'portfolioModal4',
    //   thumb: 'img/portfolio/04-thumbnail.jpg',
    //   title: 'Lines',
    //   desc: 'Branding',
    // },
    // {
    //   id: 'portfolioModal5',
    //   thumb: 'img/portfolio/05-thumbnail.jpg',
    //   title: 'Southwest',
    //   desc: 'Website Design',
    // },
    // {
    //   id: 'portfolioModal6',
    //   thumb: 'img/portfolio/06-thumbnail.jpg',
    //   title: 'Window',
    //   desc: 'Photography',
    // },
  ];


  constructor() { }

  ngOnInit() {
  }

}
