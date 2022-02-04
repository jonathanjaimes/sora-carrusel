import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carrusel';
  lista:any[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['Anterior', 'Siguiente'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private _http:HttpClient){
    this.buscarImagen()
  }

  buscarImagen() {
    this._http.get('https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=5')
    .subscribe((data:any) => {
        this.lista = data
        console.log(this.lista)
    })
  }

}
