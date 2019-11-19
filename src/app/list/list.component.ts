import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  imagens: object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getImages().subscribe(data => {
      this.imagens = data;
      console.log(this.imagens);
    });
  }

}
