import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  welcome = 'hola ';
  tasks=signal([
    'arreglar nvm',
    'estudiar angular',
    'estudiar git'
  ])
  name=signal('Daniel')
  edad=28
  img='https://w3schools.com/howto/img_avatar.png'
  persona=signal({
    nombre:"daniel",
    edad:27,
    avatar:'https://w3schools.com/howto/img_avatar.png'
  })
  clickHandler(){
    alert('hola')
  }
  changeHandler(event:Event):void{
    const input=event.target as HTMLInputElement
    const newValue=input.value
    this.name.set(newValue)
  }

  keydownHandler(event:KeyboardEvent){
    const input=event.target as HTMLInputElement
    console.log(input.value)
  }

}
