import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(private router: Router) { }
  username: string | null = '';
  ngOnInit(): void {
    this.username = sessionStorage.getItem("username")
  }

  onLogout() {
    sessionStorage.removeItem("username")
    sessionStorage.clear()
    this.router.navigate(['/login'])

  }

}
