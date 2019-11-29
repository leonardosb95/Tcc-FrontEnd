import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";
import { UrlService } from "../url.service";
import { Pessoa } from "../model/url.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-paciente-detalhes',
  templateUrl: './paciente-detalhes.component.html',
  styleUrls: ['./paciente-detalhes.component.css']
})
export class PacienteDetalhesComponent implements OnInit {

  constructor(
    public http: HttpClient,
    public urlService: UrlService
  ) { }

  public id1: any;



  ngOnInit() {
  }

}
