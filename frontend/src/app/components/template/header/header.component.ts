import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private HeaderService: HeaderService) { }

  ngOnInit(): void {

  }


  get title(): string {
    return this.HeaderService.HeaderData.title
  }

  get icon(): string {
    return this.HeaderService.HeaderData.icon
  }

  get routeUrl(): string {
    return this.HeaderService.HeaderData.routeUrl
  }
}
