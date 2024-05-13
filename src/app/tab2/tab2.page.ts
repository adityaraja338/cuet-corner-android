import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  performances: any = [
    {
      id: 1,
      subject: 'Test 1',
      startTime: '2024-05-18T18:30:00.000Z',
      endTime: '2024-05-18T19:30:00.000Z',
      score: 68,
      total: 90,
      accuracy: Math.round((68 / 90) * 10000) / 100,
      correct: 14,
      incorrect: 2,
      unattempted: 2,
    },
    {
      id: 2,
      subject: 'Test 2',
      startTime: '2024-05-19T18:30:00.000Z',
      endTime: '2024-05-19T19:30:00.000Z',
      score: 70,
      total: 90,
      accuracy: Math.round((70 / 90) * 10000) / 100,
      correct: 14,
      incorrect: 0,
      unattempted: 4,
    },
    {
      id: 3,
      subject: 'Test 3',
      startTime: '2024-05-21T18:30:00.000Z',
      endTime: '2024-05-21T19:30:00.000Z',
      score: 78,
      total: 90,
      accuracy: Math.round((78 / 90) * 10000) / 100,
      correct: 16,
      incorrect: 2,
      unattempted: 0,
    },
    {
      id: 4,
      subject: 'Test 4',
      startTime: '2024-05-25T18:30:00.000Z',
      endTime: '2024-05-25T19:30:00.000Z',
      score: 57,
      total: 90,
      accuracy: Math.round((57 / 90) * 10000) / 100,
      correct: 12,
      incorrect: 3,
      unattempted: 3,
    },
  ];

  constructor() {}

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
