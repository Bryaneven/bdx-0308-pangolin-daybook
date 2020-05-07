import { Component, OnInit, Input } from '@angular/core';
import {MenuItem, ConfirmationService} from 'primeng/api';
import { Daybook } from 'src/app/Models/daybook';
import { DaybookService } from 'src/app/shared/daybook.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'dbk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() homePage = false;
  @Input() navigationNeeded = false;
  @Input() daybookNeeded = false;
  @Input() daybook: Daybook;
  items: MenuItem[];
  user: User;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    if (!this.homePage) {
    this.userService.getMe().subscribe((user) => this.user = user);
    }
    this.items = [{
      label: 'Menu du Pangolin',
      items: [
          {label: 'Mon Dashboard', routerLink:  ['/dashboard']},
          {label: 'Se déconnecter', command : this.logoutFunction}
      ]
  }];
  }

  logoutFunction() {
    document.getElementById('logout').className = 'show';
    document.getElementById('logout-opacity').className = 'transparance';
  }

  hide() {
    document.getElementById('logout').className = 'hide';
    document.getElementById('logout-opacity').className = 'hide';
  }

  confirm() {
         localStorage.removeItem('userToken');
         alert('Vous avez été déconnecté');
         this.router.navigateByUrl('');
    }

  goToForm() {
    if (this.daybook.finished) {
      this.router.navigateByUrl('/end');
    } else if (this.daybook.validated) {
      this.router.navigateByUrl('/valid');
    } else {
      this.router.navigateByUrl('/daybook');
    }
  }

}
