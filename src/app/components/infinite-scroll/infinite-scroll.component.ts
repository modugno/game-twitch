import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {

  @Output() scrollcallback: EventEmitter<any> = new EventEmitter<any>();
  @Input('loader') loader: string = 'https://loading.io/spinners/fidget-spinner/lg.fidget-spinner.gif';

  public isVisible: boolean = false;

  constructor() { }

  ngOnInit() {
      this.scrollEvent();
  }

  /**
   * Event Scroll
   */
  private scrollEvent() {

    document.addEventListener('scroll', () => {
      
      let $infiniteScroll = document.querySelector('app-infinite-scroll');
      if (this.isVisibleInViewPort($infiniteScroll) && !this.isVisible) {    
        this.isVisible = true;
        this.scrollcallback.emit(this);
      }
    }) 
  }

  /**
   * Check if element is visible on viewport
   * 
   * @param {NodeElement|HTMLElement} element 
   */
  private isVisibleInViewPort(element) {
    if (!element) return false;
    
    let bounding = element.getBoundingClientRect();
    return (
        (bounding.bottom - 10) <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

  /**
   * Complete the infinite scroll event
   */
  complete() {
    this.isVisible = false;
  }
}
