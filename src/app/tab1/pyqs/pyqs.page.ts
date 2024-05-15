import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pyqs',
  templateUrl: './pyqs.page.html',
  styleUrls: ['./pyqs.page.scss'],
})
export class PyqsPage implements OnInit {

  pyqs:any = [
    {
      id:1,
      name: 'Set 1',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:2,
      name: 'Set 2',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:3,
      name: 'Set 3',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:4,
      name: 'Set 4',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:5,
      name: 'Set 5',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:6,
      name: 'Set 6',
      url: 'http://localhost:8100/tabs/dashboard'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
