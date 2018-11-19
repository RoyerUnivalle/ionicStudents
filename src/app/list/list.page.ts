import { Component, OnInit } from '@angular/core';

import { ListaService } from '../services/lista/lista.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  /*private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];*/
  //public items: Array<{ title: string; note: string; icon: string }> = [];
  public iconsServer : Array<any>;
  public mensaje : string = 'royer-camilo-richard';


  constructor(private listaService: ListaService) {
    /*for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
  }


  async showIcons() {
    await this.listaService.getIcons()
      .subscribe(res => {
        console.log(res);
        this.iconsServer = res.icons;
      }, err => {
        console.log(err);
        
      });
  }

  ngOnInit() {
    this.showIcons();
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
