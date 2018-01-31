import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.scss']
})
export class ThumbComponent implements OnInit {

  @Input('title') title: string = 'Sem Título';
  @Input('thumb') thumb: string = 'https://fakeimg.pl/160x224?text=Thumb';

  constructor() { }

  ngOnInit() {
  }

}
