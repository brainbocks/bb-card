import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import {Input} from '@angular/core'

@Component({
  selector: 'bb-otp-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './otp-input.component.html',
  styleUrl: './otp-input.component.scss',
})
export class OtpInputComponent implements AfterViewInit{
  @ViewChildren('slot') slot: QueryList<ElementRef> | undefined;
  @Input() mode = 'numeric';
  @Input() length: number = 6;
  @Input() autofocus: boolean = true;

  ngAfterViewInit(): void {
    this.slot?.get(0)?.nativeElement.focus();
  }


  public dummy = new Array(this.length);

  public onKeyDown(event: KeyboardEvent): void {
    // jump to the next input
    const eventTarget = event.target as HTMLInputElement;

    const prevSibling = eventTarget.previousElementSibling;
    let nextSibling = eventTarget.nextElementSibling;

    // handle backspace
    if(event.key === 'Backspace'){
      // check if there's a value in the current input and remove it otherwise focus on the next sibling
      if(eventTarget.value === '' || eventTarget.selectionStart === 0){
        if(prevSibling){
          // automatic deletes a character from the previous element
          (prevSibling as HTMLInputElement).focus();
        }
        return;
      }else{
        return;
      }
    }

    // handle direction forward arrow
    if(event.key === 'ArrowRight'){
      if(eventTarget.selectionStart)//selectionStart is greater than zero - maximum of one in this case
        if(nextSibling) (nextSibling as HTMLInputElement).focus();
      return;
    }

    // Handle direction backward arrow
    if(event.key === 'ArrowLeft'){
      if(!eventTarget.selectionStart)//selectionStart is zero - never negative
        if(prevSibling) (prevSibling as HTMLInputElement).focus();
      return;
    }

    // handle input manually
    event.preventDefault();

    // For a numeric mode, check it character is numeric
    // Based on unicode and ascii characters '0' to '9' are contigious
    if(this.mode === 'numeric' && (event?.key < '0'  || event.key > '9')) return;
    
    eventTarget.value = event.key;

    // Check if it isn't the last input element and put focus on the next input element
    if(eventTarget.nextElementSibling){
      while(nextSibling){
        if(!(nextSibling as HTMLInputElement).value){
          console.log('focusing');
          (nextSibling as HTMLElement).focus();
          break;
        }
        nextSibling = nextSibling.nextElementSibling;
      }
    }
  }
}
