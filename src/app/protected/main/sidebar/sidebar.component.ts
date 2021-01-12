import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navList: Array<any> = [
    { name: 'First', link: '#' },
    { name: 'Second', link: '#' },
    {
      name: 'Third', children: [
        { name: 'One', link: '#' },
        { name: 'Two', link: '#' },
        { name: 'Three', link: '#' }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
