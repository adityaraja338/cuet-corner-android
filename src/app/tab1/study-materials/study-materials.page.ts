import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-materials',
  templateUrl: './study-materials.page.html',
  styleUrls: ['./study-materials.page.scss'],
})
export class StudyMaterialsPage implements OnInit {

  materials:any = [
    {
      id:1,
      name: 'Material 1',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:2,
      name: 'Material 2',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:3,
      name: 'Material 3',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:4,
      name: 'Material 4',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:5,
      name: 'Material 5',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:6,
      name: 'Material 6',
      url: 'http://localhost:8100/tabs/dashboard'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
