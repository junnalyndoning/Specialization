import { Component, OnInit } from '@angular/core';

declare var switchForm: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpecializationProject';
  ngOnInit(): void {
    new switchForm();
  }
}
