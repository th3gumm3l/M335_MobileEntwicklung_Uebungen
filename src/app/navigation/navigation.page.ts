import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navByUrl() {
    this.router.navigateByUrl('/navigation-detail');
  }

  navWithParam() {
    this.router.navigate(['/', 'navigation-detail']).then(
      (nav) => {
        console.log(nav); // true if navigation is successful
      },
      (err) => {
        console.log(err); // when there's an error
      }
    );
  }
}
