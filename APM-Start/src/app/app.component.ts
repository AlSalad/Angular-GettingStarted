import { Component } from "@angular/core";

@Component({
  //product management root
  selector: 'pm-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  pageTitle: string = "Acme Product Management";
}