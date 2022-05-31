import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  inputValue: string = '';
  inputValueChanged: Subject<string> = new Subject<string>();

  @Output() onChangeValue = new EventEmitter<string>();
  subscription: Subscription;
  
  constructor() {
    this.subscription = this.inputValueChanged.pipe(
      debounceTime(600), 
      distinctUntilChanged())
      .subscribe(value => {
        this.onChangeValue.emit(value);
      });
   }

  ngOnInit(): void {
  }

  changeInput( text: any){
    this.inputValueChanged.next((text.target as HTMLTextAreaElement).value);
	}

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
