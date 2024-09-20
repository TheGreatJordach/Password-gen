import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'passwordGen';
  password: string = ""

  length:number = 0;
  includeLetters = false
  includeNumbers = false
  includeSymbols = false


  onButtonClick(){
   const number = "1234567890"
   const letters = "abcdefghijklmnopqrstuvwxyz"
   const symbols ="!@#$%^&*()"

   let validChars = ""
    if (this.includeLetters) {
      validChars += letters

    }
    if (this.includeNumbers) {
      validChars += number
    }
    if (this.includeSymbols) {
      validChars += symbols
    }


    let generatedPassword = ""
    for (const _ of Array(this.length)) {
       const selectRandomIndex: number = Math.floor(Math.random() * validChars.length)
       generatedPassword += validChars[selectRandomIndex]

      if(this.includeNumbers || this.includeLetters || this.includeSymbols) {
        this.password = generatedPassword
     } else {
        this.password = "You must select at least one letter or Number or Symbols"
      }



    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;

  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event: Event){
  const userInput = event.target as HTMLInputElement;
    this.length = parseInt(userInput.value)

  }


}
