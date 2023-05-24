import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onomatopoeiaList: string[] = [];

  onDataChange(event: string): void {
    this.onomatopoeiaList.push(event);
  }
}
