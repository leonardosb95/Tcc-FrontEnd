import { PacienteDetalhesComponent } from "./../paciente-detalhes/paciente-detalhes.component";
import {
  Component,
  OnInit,
  Input,
  Injectable,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { UrlService } from "../url.service";
import { Pessoa, Endereco } from "../model/url.model";
import { HttpClient } from "@angular/common/http";
import { filter } from "rxjs/operators";
import { THROW_IF_NOT_FOUND } from "@angular/core/src/di/injector";
import { stringify } from "querystring";

@Component({
  selector: "app-pacientes",
  templateUrl: "./pacientes.component.html",
  styleUrls: ["./pacientes.component.css"]
})
export class PacientesComponent implements OnInit {
  constructor(public http: HttpClient, public urlService: UrlService) { }

  public paciente: {};

  mostraTabela: boolean = false;
  mostraTabela2: boolean = false;
  nome: string;
  dtNasc: string;
  idade: number;
  sexo: string;
  id: any;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  email: string;
  telCel: string;
  telRes: string;
  motivo: string;
  obs: string;
  numberId: any;


  mostraTabelaNome: string;
  mostraTabelaId: any;

  public peso: string;
  public pa: string;
  public altura: string;
  public imc: string;
  public pct: string;
  public pcb: string;
  public pcse: string;
  public pcPeitoral: string;
  public pcAb: string;
  public pcsi: string;
  public pcCoxa: string;
  public ppcPant: string;
  public cBraco: string;
  public cAntebraco: string;
  public cPunho: string;
  public cTorax: string;
  public cCintura: string;
  public cAbdominal: string;
  public cQuadril: string;
  public cCoxa: string;
  public cPanturrilha: string;
  public compleicao: string;
  public percentGordura: string;
  public percentMusc: string;
  public pesoAtual: string;
  public pesoIdeal: string;
  public ficha: any;
  public pesquisa: string;
  public frequencia: string;
  public atvFisica: string;
  public duracao: string;
  public preTreino: string;
  public horario: string;
  public obsNausea: string;
  public gli: string;
  public hg: string;
  public tg: string;
  public ct: string;
  public ldl: string;
  public hdl: string;
  public medicamentos: string;
  public doseMedicamento: string;
  public horMedicamento: string;
  public motivoMedicamento: string;
  public obsVomito: string;
  public obsMastigacao: string;
  public obsDegluticao: string;
  public obsDigestao: string;
  public obsPirose: string;
  public obsRefluxo: string;
  public obsDiarrea: string;
  public obsObstipacao: string;
  public obsInsonia: string;
  public obsEstresse: string;
  public obsCansaco: string;
  public obsAnsiedade: string;
  public lesoes: string;
  public cirurgia: string;
  public outro: string;
  public diurese: string;
  public patologia: string;
  public antecedentes: string;
  public freqAlimentar: string;
  public diagnostico: string;
  public relato: string;
  public profissao: string;
  public cargaHoraria: string;
  public compFamiliar: string;
  public compraAlimentos: string;
  public preparaRefeicoes: string;
  public realizaRefeicoes: string;
  public intolerancia: string;
  public preferencia: string;
  public alteracoesApetite: string;
  public inicioObesidade: string;
  public dieta: string;
  public refeicoesDia: string;
  public agua: string;
  public sal: string;
  public oleo: string;
  public suplementos: string;
  public indicacao: string;
  public desjejum: string;
  public almoco: string;
  public lanche: string;
  public janta: string;
  public ceia: string;
  public foraHora: string;


  public pessoa: any["nome"];
  public antro: any["nome"];
  public ativ: any["nome"];
  public dados: any["nome"];
  public end: any["nome"];
  public exame: any["nome"];
  public freq: any["nome"];
  public hist: any["nome"];
  public social: any["nome"];
  public recor: any["nome"];
  public index = [];
  public pessoaId: any["nome"];
  public pessoaId1: any["nome"];
  public pessoaId2: any["nome"];
  public pessoaId3: any["nome"];
  public pessoaId4: any["nome"];
  public pessoaId5: any["nome"];
  public pessoaId6: any["nome"];
  public pessoaId7: any["nome"];
  public pessoaId8: any["nome"];
  public pessoaId9: any["nome"];
  element;


  //Paginação
  public pagina: number = 0;
  public totalPaginas: any["nome"];
  public pages: Array<number>;

  //Status do Serviço
  public status: string;

  ngOnInit() {//Ao inicializar a pagina paciente, ira carregar as variaveis abaixo
    this.mostraTabela = true;
    this.buscaPessoas();
    this.pressionaEnterMatricula();
    this.pressionaEnterPaciente();
  }

  buscaPessoas() {
    this.urlService.sendGetRequestPessoa(0).subscribe((dados: any[]) => {
      this.pessoa = dados['content'];//Pessoa
      this.totalPaginas = dados['totalPages'];//Total paginas
      this.pages = Array(this.totalPaginas).fill(0).map((x, i) => i); //Adiciona a quantidade de paginas totais
      this.pagina = dados['size'];
      console.log(dados);
    });

  }


  //Pagina Selecionada
  paginaSelecionada() {
    var li = document.querySelector('#paginacao');
    li.addEventListener('click', function (event) {
      let paginaSelecionada;
      var paginaAtual = document.querySelector('#paginaAtual');
      paginaSelecionada = event.target['innerHTML'];//Quando eu  clico ele pega o valor da pagina
      paginaAtual.innerHTML = paginaSelecionada;
      console.log("Pagina atual: " + paginaAtual.innerHTML);
    });
    if (this.pagina == 10) {
      this.atualizaPaginaNome();
    }
    else {
      this.atualizaPagina();
    }
  }

  //AO CLICAR NA PAGINA, TRAZ OS CLIENTES DAQUELA LISTA
  atualizaPagina() {
    let page = Number(document.querySelector('#paginaAtual').innerHTML) - 1;
    console.log("Peguei o valor: " + page);
    this.urlService.sendGetRequestPessoa(page).subscribe((dados: any[]) => {
      this.pessoa = dados['content'];//Pessoa
      this.totalPaginas = dados['totalPages'];//Total paginas
      this.pages = Array(this.totalPaginas).fill(0).map((x, i) => i); //Adiciona a quantidade de paginas totais
      console.log(dados);
    });
  }

  //ATUALIZA A PAGINAÇÃO AO CLICAR, AS PESSOAS QUE FORAM LOCALIZADAS PELO NOME
  atualizaPaginaNome() {
    let page = Number(document.querySelector('#paginaAtual').innerHTML) - 1;
    console.log("Peguei o valor: " + page);
    this.urlService.sendGetRequestPessoaNome(page, this.nome).subscribe((dados: any[]) => {
      this.pessoa = dados['content'];//Pessoa
      this.totalPaginas = dados['totalPages'];//Total paginas
      this.pages = Array(this.totalPaginas).fill(0).map((x, i) => i); //Adiciona a quantidade de paginas totais
      console.log(dados);
    });
  }

  //BUSCA A PESSOA POR NOME
  buscaPacientePorNome() {
    this.mostraTabela = true;
    this.mostraTabela2 = false;
    let page = 0;
    console.log(this.nome);
    if (typeof this.nome == 'undefined' || this.nome.trim() == '') {
      this.buscaPessoas();

    }
    else {

      this.urlService.sendGetRequestPessoaNome(page, this.nome).subscribe((dados: any[]) => {
        this.pessoa = dados['content'];//Pessoa
        this.totalPaginas = dados['totalPages'];//Total paginas
        this.pages = Array(this.totalPaginas).fill(0).map((x, i) => i); //Adiciona a quantidade de paginas totais
        this.pagina = dados['size'];
        console.log(dados);
      });
    }


  }
  //BUSCA A PESSOA POR MATRICULA
  buscaPorCodigoMatricula() {
    this.mostraTabela = false;
    this.mostraTabela2 = true;
    this.urlService.sendGetRequestPessoaId(this.numberId).subscribe((dados: any[]) => {
      this.mostraTabelaNome = dados['nome'];//Pessoa
      this.mostraTabelaId = dados['id'];
      this.totalPaginas = 1;
      console.log(dados);
    });

  }


  pressionaEnterMatricula() {
    var inputAltura = document.getElementById("paciente");
    inputAltura.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("botaoMatricula").click();
      }
    });
  }

  pressionaEnterPaciente() {
    var inputAltura = document.getElementById("nomePaciente");
    inputAltura.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("botaoPaciente").click();
      }
    });
  }

  botaoSelecionado() {
    var botoes = document.querySelectorAll("#botaoInformacoes");
    var div = document.querySelectorAll("#crudLista");

    for (let index = 0; index < botoes.length; index++) {
      botoes[index].addEventListener("click", function () {
        const atributo = div[index].getAttribute('class');
        console.log(atributo);
        if (atributo == 'esconde') {
          div[index].classList.remove('esconde');
          console.log('adicionou class');
        } else {
          div[index].classList.add('esconde');
          console.log('removeu class');
        }

      })


    }

  }




  deletarPaciente() {
    var botoes = document.querySelectorAll("#deletar");
    for (let index = 0; index < botoes.length; index++) {
      botoes[index].addEventListener("click", function () {
        let tds = document.querySelectorAll("#id");
        tds[index].classList.add('Selecionado');
      });
    }
    var id = document.querySelector('.Selecionado');
    console.log(id.innerHTML);
    var pessoa = new Pessoa();
    pessoa.id = Number(id.innerHTML);
    console.log("Id selecionado: " + pessoa.id);
    this.urlService.sendDeleteRequestPessoa(pessoa.id).subscribe(err => {
      console.log(err);
    });


    this.ngOnInit();

  }












}//fim NgOnInit 










