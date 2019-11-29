import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Imc,
  Pessoa

} from "./../model/url.model";
import { Http } from "@angular/http";
import { UrlService } from "../url.service";

@Component({
  selector: 'app-utilidades',
  templateUrl: './utilidades.component.html',
  styleUrls: ['./utilidades.component.scss']
})
export class UtilidadesComponent implements OnInit {

  constructor(public http: HttpClient, public urlService: UrlService) { }

  public altura: number;
  public peso: number;
  public imc: number;
  public pesoNormal: string;
  public matricula: number;



  ngOnInit() {
    this.pressionaEnter();
  }

  calcula() {
    this.imc = Number((this.peso / (this.altura * this.altura)).toFixed(2));
    if (this.imc < 23.9) {
      this.pesoNormal = 'Abaixo do Peso';
    }
    if (this.imc > 24) {
      this.pesoNormal = 'Peso Normal';
    }
    if (this.imc > 24.1) {
      this.pesoNormal = 'Excesso de Peso';
    }
    if (this.imc > 29.1) {
      this.pesoNormal = 'Obesidade';
    }
    if (this.imc > 35) {
      this.pesoNormal = 'Obesidade Mórbida';
    }

    this.enviaImc();
  }


  enviaImc() {
    const imc = new Imc();
    imc.pessoaId = this.matricula;
    imc.imc = String(this.imc);

    this.urlService.sendPostRequestImc(imc).subscribe(
      err => {
        console.log(err);
      }
    );


  }



  pressionaEnter() {
    var inputAltura = document.getElementById("altura");
    inputAltura.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("botao").click();
      }
    });
  }

}




