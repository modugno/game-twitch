import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input('path') path: string = 'https://loading.io/spinners/fidget-spinner/lg.fidget-spinner.gif';
  @Input('text') text: string = 'Carregando';
  
  constructor() { }

  ngOnInit() {
  }

}
