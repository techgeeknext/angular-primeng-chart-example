import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public userAppData: any;
  public appUserCount1: any;
  public appUserCount2: any;
  public appUserCount3: any;
  public appUserCount4: any;
  public appUserCount5: any;
  public userLabel: any;
  public options: any;
  public userUsageHoursData;

  constructor() {}

  appUsageData = [
    { name: 'user1', country: 'USA', appname: 'app-1' },
    { name: 'user2', country: 'UK', appname: 'app-1' },
    { name: 'user3', country: 'Canada', appname: 'app-1' },
    { name: 'user4', country: 'Germany', appname: 'app-1' },
    { name: 'user5', country: 'Poland', appname: 'app-2' },
    { name: 'user6', country: 'USA', appname: 'app-2' },
    { name: 'user7', country: 'Canada', appname: 'app-2' },
    { name: 'user8', country: 'Germany', appname: 'app-3' },
    { name: 'user9', country: 'USA', appname: 'app-3' },
    { name: 'user10', country: 'Germany', appname: 'app-3' },
    { name: 'user11', country: 'Canada', appname: 'app-3' },
    { name: 'user12', country: 'USA', appname: 'app-3' },
    { name: 'user13', country: 'India', appname: 'app-3' },
    { name: 'user14', country: 'India', appname: 'app-3' },
    { name: 'user15', country: 'Canada', appname: 'app-4' },
    { name: 'user16', country: 'USA', appname: 'app-4' },
    { name: 'user17', country: 'India', appname: 'app-5' },
    { name: 'user18', country: 'India', appname: 'app-5' },
    { name: 'user19', country: 'Canada', appname: 'app-5' },
    { name: 'user20', country: 'USA', appname: 'app-5' },
    { name: 'user21', country: 'manager', appname: 'app-5' },
  ];

  ngOnInit() {
    this.appUserCount1 = this.appUsageData.filter(
      (app) => app.appname === 'app-1'
    ).length;
    this.appUserCount2 = this.appUsageData.filter(
      (app) => app.appname === 'app-2'
    ).length;
    this.appUserCount3 = this.appUsageData.filter(
      (app) => app.appname === 'app-3'
    ).length;
    this.appUserCount4 = this.appUsageData.filter(
      (app) => app.appname === 'app-4'
    ).length;
    this.appUserCount5 = this.appUsageData.filter(
      (app) => app.appname === 'app-5'
    ).length;

    this.userLabel = this.appUsageData
      .map((app) => app.appname)
      .filter((value, index, self) => self.indexOf(value) === index);

    this.userAppData = {
      labels: this.userLabel,
      datasets: [
        {
          data: [
            this.appUserCount1,
            this.appUserCount2,
            this.appUserCount3,
            this.appUserCount4,
            this.appUserCount5,
          ],
          backgroundColor: [
            '#ff0000',
            '#0000FF',
            '#FFFF00',
            '#FFC0CB',
            '#7f00ff ',
          ],
        },
      ],
    };

    this.userUsageHoursData = {
      labels: ['Jan', 'Feb', 'March', 'April'],
      datasets: [
        {
          label: 'app-1',
          backgroundColor: '#42A5F5',
          data: [44, 65, 23, 77],
        },
        {
          label: 'app-2',
          backgroundColor: '#ff0000',
          borderColor: '#7CB342',
          data: [14, 65, 16, 100],
        },
      ],
    };

    this.options = {
      //display labels on data elements in graph
      plugins: {
        datalabels: {
          align: 'end',
          anchor: 'end',
          borderRadius: 4,
          backgroundColor: 'teal',
          color: 'white',
          font: {
            weight: 'bold',
          },
        },
        // display chart title
        title: {
          display: true,
          fontSize: 16,
        },
        legend: {
          position: 'bottom',
        },
      },
    };
  }
}
