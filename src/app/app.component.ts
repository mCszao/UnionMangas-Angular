import { Component } from '@angular/core';
import { Tarefas } from './tarefas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'unionmanga';
  listWorks = [
    new Tarefas("Teste 01")
  ];

  adicionar(item: string) {
    this.listWorks.push(new Tarefas(item))

    console.log(this.listWorks);
  }

  remove() {
    this.listWorks = []
  }

}
