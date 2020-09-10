import { Component, OnInit } from '@angular/core';
//todo. this needs to be globalised
const MENU_ITEMS: { name: string, href?: string }[] = [
  { name: "Home", href: "/" },
  { name: "Today's Session", href: "/today" },
  { name: "Next Sessions", href: "/next" },
  { name: "All Sessions", href: "/all-sessions" },
  { name: "Team", href: "/team" }  
];
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuDropdownOpen: boolean = false;
  menuItems = MENU_ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
