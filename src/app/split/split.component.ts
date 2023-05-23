import { Component } from '@angular/core';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.scss']
})
export class SplitComponent {

  public frase: string = "";
  public palavras: string[] = [];

  constructor() {
    console.log('frase', this.frase);
    console.log('palavras', this.palavras);
  }

  public splitFrase(): void {
    this.palavras = this.frase.split(' ');

    console.log('frase', this.frase);
    console.log('palavras', this.palavras);

    const filtroPalavras = this.palavras
      .map(palavra => `contains(code, '${palavra}') or contains(description, '${palavra}') or contains(costCenter, '${palavra}')`)
      .join(' and ');

    const filtroOData = `$filter=${filtroPalavras}`;

    console.log('filtroOData', filtroOData);
  }

  public limparInput(): void {
    this.frase = '';
    this.palavras = [];
  }

}
