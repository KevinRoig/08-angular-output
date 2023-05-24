import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {
  onomatopia: string = "";
  @Output()
  newOnomatopia: EventEmitter<string> = new EventEmitter();

  sendDataToParent(): void {
    this.newOnomatopia.emit(this.onomatopia);
    console.log(this.onomatopia);
  }
  
}

