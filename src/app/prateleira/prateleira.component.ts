import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prateleira',
  templateUrl: './prateleira.component.html',
  styleUrls: ['./prateleira.component.css']
})
export class PrateleiraComponent implements OnInit {
  public objetoProduto = {
    imagem: "/assets/tenis.png",
    titulo: "TÊNIS COURO PUMA R698 Q4 V2",
    preco: "399,00",
    precopromocional: "299,00",
    qtdparcela:"ou em 3x de R$ 133,00"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
