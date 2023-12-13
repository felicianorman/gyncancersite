import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public logoImg = '../../assets/logo.png';

  public toggleDropdown() {
    const dropdown = document.getElementById('myDropdown');
    if (dropdown) {
      dropdown.classList.toggle('show');
    }
  }

  // Close the dropdown menu if the user clicks outside of it
  ngOnInit() {
    // (window as any).onclick = function (event: any) {
    //   if (!event.target.matches('.dropbtn')) {
    //     var dropdowns = document.getElementsByClassName('dropdown-content');
    //     var i;
    //     for (i = 0; i < dropdowns.length; i++) {
    //       var openDropdown = dropdowns[i];
    //       if (openDropdown.classList.contains('show')) {
    //         openDropdown.classList.remove('show');
    //       }
    //     }
    //   }
    // };
  }
}
