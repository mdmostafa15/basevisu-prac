import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Ui5WebcomponentsModule} from '@ui5/webcomponents-ngx'
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { TableContainerComponent } from "./table-container/table-container.component";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, Ui5WebcomponentsModule, SideMenuComponent, TableContainerComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  lang: string="BN";
  filterItem: string='filter item 1';
  flag: boolean = false;
  showItemList() {
    this.flag = !this.flag;
  }
  setLang(lang: string ) {
    console.log("set language: ");
    this.lang = lang;
  }
  logOut() {
    console.log("logOut clicked!!!");
    
  }
}
