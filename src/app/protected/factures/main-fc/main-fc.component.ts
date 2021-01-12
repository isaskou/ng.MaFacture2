import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-fc',
  templateUrl: './main-fc.component.html',
  styleUrls: ['./main-fc.component.scss']
})
export class MainFcComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}
