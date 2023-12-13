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

  onMouseEnter() {
    this.isDropdownOpen = true;
  }

  onMouseLeave() {
    setTimeout(() => {
      // Check if the mouse is still outside the dropdown before hiding

      this.isDropdownOpen = false;
    }, 2000); // Adjust the delay (in milliseconds) as needed
  }

  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribe to router events to reset dropdown state on route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: Event) => {
        // Check the current route and close the dropdown if needed
        if ((event as NavigationEnd).url !== '/stod-oss') {
          this.isDropdownOpen = false;
        }
      });
  }

  public toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
