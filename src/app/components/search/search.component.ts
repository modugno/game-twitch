import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  @Output() popularity: EventEmitter<any> = new EventEmitter<any>();
  @Output() viewers: EventEmitter<any> = new EventEmitter<any>();

  public popularityActive: boolean = false;

  public viewersActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Emit the value typed
   * @param value 
   */
  onInput(value) {
    this.search.emit(value);
  }

  /**
   * When popularity button was clicked
   * @param event 
   */
  onPopularity(event) {
    let element = event.target || event.srcElement;
    this.popularityActive = !this.popularityActive;

    // change button style
    (this.popularityActive) ? this.activeButton(element) : this.inactiveButton(element)
    
    this.popularity.emit(this.popularityActive);
  }

  /**
   * When viewers button was clicked
   * @param event 
   */
  onViewers(event) {
    let element = event.target || event.srcElement;
    this.viewersActive = !this.viewersActive;

    // change button style
    (this.viewersActive) ? this.activeButton(element) : this.inactiveButton(element)
    
    this.viewers.emit(this.viewersActive);
  }

  /**
   * Active Button style
   * @param {NodeElement|HTMLElement} element 
   */
  private activeButton(element) {
    element.classList.remove('btn-primary');
    element.classList.add('btn-secondary');
  }
  
  /**
   * Inactive Button style
   * @param {NodeElement|HTMLElement} element 
   */
  private inactiveButton(element) {
    element.classList.remove('btn-secondary');
    element.classList.add('btn-primary');
  }
}
