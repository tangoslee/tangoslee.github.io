import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timelines = [
    {
      startDate: 'Jan 2017',
      endDate: '2018',
      position: 'Web Developer (Contract/Part-time)',
      group: 'A Ticket Commerce Site (Remote, Korea)',
      icon: 'assets/img/about/keyboard.png',
      desc: [
        'Integrated OAuth2 Social Login APIs. (Facebook, Kakao, Naver)',
        'Setup a deploy/development environment (CentOS, Apache, PHP5, Rsync)',
        `Devised enhanced product registration for the existing dashboard;
          Reduced 80% of a number of unnecessary processes by analyzing task processes.
          As a result, it saved 10% off Man-month of doing  products registration.`,
        `Skills: PHP,  jQuery, Bootstrap 4, MySQL, Apache`,
      ],
    },
    {
      startDate: 'Jan 2016',
      endDate: 'May 2018',
      position: 'Seneca College Student',
      group: 'Studying at Computer Programer Program',
      icon: 'assets/img/about/1.jpg',
      desc: '',
    },
    {
      startDate: '2014',
      endDate: '2015',
      position: 'Full Stack Developer (PHP/jQuery)',
      group: 'Cyworld co. LTD. / Seoul, KOREA.',
      icon: 'assets/img/about/2.png',
      desc: [
        `Developed an Asynchronous Publisher, which write once to the Cyworld then automatically
         post to Twitter, Facebook, Kakao story and Naver blog through APIs. (PHP / Custom MQ / Daemontools / MySQL / OAuth2)`,
        'Developed an Opengraph Crawler that crawls an OpenGraph meta information. (PHP / Memecached)',
        'Managed/Developed a Cyworld API for Apps. (PHP / MySQL / SQLServer / Memcached / Custom MQ)',
        'Designed legacy data migration process that migrated from MySQL to MariaDB (TokuDB) and implemented migrator for PHP. (PHP)',
        'Designed and developed Cyworld Web Editor that save data to JSON structure. (Javascript / JQuery)',
      ],
    },
    {
      startDate: '2007',
      endDate: '2013',
      position: 'PHP Developer',
      group: 'SK Communications / Seoul, KOREA.',
      icon: 'assets/img/about/3.jpg',
      desc: [
        'Developed a Timeline service in Cyworld.(PHP / MySQL / Memcached / CustomMQ / Apache)',
        'Managed/Developed a Cyworld Blog. (PHP / Javascript / MySQL / SQL Server)',
        'Managed Cyworld PHP Framework. (PHP)',
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
