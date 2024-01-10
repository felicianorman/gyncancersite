import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public logoImg = '../../assets/logo.png';
  public isDropdownOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: Event) => {
        if ((event as NavigationEnd).url !== '/stod-oss') {
          this.isDropdownOpen = false;
        }
      });
  }

  public toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
