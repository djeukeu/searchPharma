import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  theme = 'light';

  constructor() { }

  ngOnInit() {
  }

  switch(event){
    if (event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
      this.theme = 'dark';
    } else {
      document.body.setAttribute('color-theme', 'light');
      this.theme = 'light';
    }
  }

}
