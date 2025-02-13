import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Ui5WebcomponentsModule} from '@ui5/webcomponents-ngx'
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { TableContainerComponent } from "./table-container/table-container.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ui5WebcomponentsModule, SideMenuComponent, TableContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basevisu-prac';
}
