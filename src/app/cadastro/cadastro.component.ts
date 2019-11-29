import { HttpClient } from "@angular/common/http";
import {
  Pessoa,
  Antropometricos,
  AtividadeFisica,
  DadosClinicos,
  Recordatario,
  Endereco,
  ExameBioquimico,
  FrequenciaAlimentar,
  HistoricoAlimentar,
  Social
} from "./../model/url.model";
import { Component, OnInit, Output } from "@angular/core";
import { UrlService } from "../url.service";
import { Http } from "@angular/http";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"]
})
export class CadastroComponent implements OnInit {
  constructor(
    public httpClient: HttpClient,
    public urlService: UrlService,
    public http: Http
  ) { }

  nome: string;
  id: number;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  email: string;
  telCelular: string;
  telResidencial: string;
  idade: number;
  dtNasc: string;
  motivoConsulta: string;
  sexo: string;
  obs: string;
  profissao: string;
  cargaHoraria: string;
  estadoCivil: string;
  compFamiliar: string;
  compraAlimentos: string;
  preparaRefeicoes: string;
  realizaRefeicoes: string;
  bebida: string;
  fuma: string;
  cigarroDia: string;
  pa: string;
  peso: string;
  altura: string;
  imc: string;
  pct: string; // prega cutânea tricipital
  pcb: string; // prega cutânea bicipital
  pcse: string; // prega cutânea subescapular
  pcPeitoral: string;
  pcAb: string; // abdominal
  pcsi: string; // suprailíaca
  pcCoxa: string;
  pcPant: string; // panturrilha
  cBraco: string; // circunferência
  cAntebraco: string;
  cPunho: string;
  cTorax: string;
  cCintura: string;
  cAbdominal: string;
  cQuadril: string;
  cCoxa: string;
  cPanturrilha: string;
  compleicao: string; // biotipo
  percentGordura: string;
  percentMusc: string;
  pesoAtual: string;
  pesoIdeal: string;
  obsVomito: string;
  obsNausea: string;
  obsMastigacao: string;
  obsDegluticao: string; // engolir alimentos
  obsDigestao: string;
  obsPirose: string; // azia
  obsRefluxo: string;
  obsDiarreia: string;
  obsObstipacao: string; // prisão de ventre
  obsInsonia: string;
  obsEstresse: string;
  obsCansaco: string;
  obsAnsiedade: string;
  lesoes: string;
  cirurgia: string;
  outro: string;
  diurese: string; // produção de urina pelo rim
  patologia: string;
  antecedentes: string;
  atvFisica: string;
  frequencia: string;
  duracao: string;
  preTreino: string;
  horario: string;
  intolerancia: string;
  preferencia: string;
  alteracoesApetite: string;
  inicioObesidade: string;
  dieta: string;
  refeicoesDia: string;
  agua: string;
  sal: string;
  oleo: string;
  suplementos: string;
  indicacao: string;
  gli: string;
  gliData: string;
  hg: string;
  hgData: string;
  tg: string;
  tgData: string;
  ct: string;
  ctData: string;
  ldl: string;
  ldlData: string;
  hdl: string;
  hdlData: string;
  medicamentos: string;
  doseMedicamento: string;
  horMedicamento: string;
  motivoMedicamento: string;
  desjejum: string;
  colacao: string;
  almoco: string;
  lanche: string;
  jantar: string;
  ceia: string;
  foraHora: string;
  public pessoaid: any['nome'];
  public idPessoa: any['id'];
  public pessoaId: any['nome'];

  public pagina:number=0;

  ngOnInit() {
    this.urlService.sendGetRequestPessoa(this.pagina).subscribe((dados: any[]) => {
      this.pessoaid = dados;
      console.log(this.pessoaid);
      this.indexArray();
    });
  }

  indexArray() {
    let array = [];
    array = this.pessoaid;
    for (let index = 0;  index < array.length; index++) {
      const element = array[index].id;
      console.log(element);
      this.id = element + 1;
      this.getId();
    }
  }

  getId() {
    this.urlService.sendGetRequestPessoaId(this.id).subscribe((dados: any[]) => {
      this.pessoaId = dados;
      console.log(this.pessoaId)
    })
  }

  pessoa() {
    console.log(this.nome);
    const pessoa: Pessoa = new Pessoa();
    pessoa.nome = this.nome;
    pessoa.dtNasc = this.dtNasc;
    pessoa.idade = this.idade;
    pessoa.sexo = this.sexo;
    pessoa.id = this.id;
    console.log(pessoa);
    this.urlService.sendPostRequestPessoa(pessoa).subscribe(err => {
      console.log(err);
    });
  }





  antropometricos() {
    const antro: Antropometricos = new Antropometricos();
    antro.pessoaId = this.id;
    antro.altura = this.altura;
    antro.cAbdominal = this.cAbdominal;
    antro.cBraco = this.cBraco;
    antro.cAntebraco = this.cAntebraco;
    antro.cCintura = this.cCintura;
    antro.cCoxa = this.cCoxa;
    antro.cPanturrilha = this.cPanturrilha;
    antro.cPunho = this.cPunho;
    antro.cQuadril = this.cQuadril;
    antro.cTorax = this.cTorax;
    antro.compleicao = this.compleicao;
    antro.imc = this.imc;
    antro.pcAb = this.pcAb;
    antro.pcCoxa = this.pcCoxa;
    antro.pcPeitoral = this.pcPeitoral;
    antro.pcb = this.pcb;
    antro.pcse = this.pcse;
    antro.pcsi = this.pcsi;
    antro.pct = this.pct;
    antro.percentGordura = this.percentGordura;
    antro.percentMusc = this.percentMusc;
    antro.peso = this.peso;
    antro.pesoAtual = this.pesoAtual;
    antro.pesoIdeal = this.pesoIdeal;
    antro.ppcPant = this.pcPant;
    this.urlService.sendPostRequestAntropometricos(antro).subscribe(err => {
      console.log(err);
    });
  }

  atividadeFisica() {
    const ativ: AtividadeFisica = new AtividadeFisica();
    ativ.frequencia = this.frequencia;
    ativ.duracao = this.duracao;
    ativ.pessoaId = this.id;
    ativ.atvFisica = this.atvFisica;
    ativ.horario = this.horario;
    ativ.preTreino = this.preTreino;
    this.urlService.sendPostRequestAtividadeFisica(ativ).subscribe(err => {
      console.log(err);
    });
  }

  dadosClinicos() {
    const dados: DadosClinicos = new DadosClinicos;
    dados.antecedentes = this.antecedentes;
    dados.pessoaId = this.id;
    dados.cirurgia = this.cirurgia;
    dados.diurese = this.diurese;
    dados.lesoes = this.lesoes;
    dados.obsAnsiedade = this.obsAnsiedade;
    dados.obsCansaco = this.obsCansaco;
    dados.obsDegluticao = this.obsDegluticao;
    dados.obsDiarrea = this.obsDiarreia;
    dados.obsDigestao = this.obsDigestao;
    dados.obsEstresse = this.obsEstresse;
    dados.obsInsonia = this.obsInsonia;
    dados.obsMastigacao = this.obsMastigacao;
    dados.obsNausea = this.obsNausea;
    dados.obsObstipacao = this.obsObstipacao;
    dados.obsPirose = this.obsPirose;
    dados.obsRefluxo = this.obsRefluxo;
    dados.outro = this.outro;
    dados.obsVomito = this.obsVomito;
    dados.patologia = this.patologia;

    this.urlService.sendPostRequestDadosClinicos(dados).subscribe(err => {
      console.log(err);
    });
  }

  end() {
    const end: Endereco = new Endereco;
    end.endereco = this.endereco;
    end.pessoaId = this.id;
    end.bairro = this.bairro;
    end.cidade = this.cidade;
    end.email = this.email;
    end.estado = this.estado;
    end.motivoConsulta = this.motivoConsulta;
    end.telCelular = this.telCelular;
    end.telResidencial = this.telResidencial;
    end.obs = this.obs;
    console.log(end);

    this.urlService.sendPostRequestEndereco(end).subscribe(err => {
      console.log(err);
    });
  }

  exameBioquimico() {
    const exame: ExameBioquimico = new ExameBioquimico;
    exame.gli = this.gli;
    exame.hg = this.hg;
    exame.tg = this.tg;
    exame.pessoaId = this.id;
    exame.ct = this.ct;
    exame.ldl = this.ldl;
    exame.hdl = this.hdl;
    exame.medicamentos = this.medicamentos;
    exame.motivoMedicamento = this.motivoMedicamento;
    exame.doseMedicamento = this.doseMedicamento;
    exame.horMedicamento = this.horMedicamento;

    this.urlService.sendPostRequestExameBioquimico(exame).subscribe(
      err => {
        console.log(err);
      }
    );
  }

  frequenciaAlimentar() {
    const freq: FrequenciaAlimentar = new FrequenciaAlimentar;
    freq.freqAlimentar = this.frequencia;
    freq.pessoaId = this.id;

    this.urlService.sendPostRequestFrequenciaAlimentar(freq).subscribe(
      err => {
        console.log(err);
      }
    );
  }

  historicoAlimentar() {
    const hist: HistoricoAlimentar = new HistoricoAlimentar;
    hist.intolerancia = this.intolerancia;
    hist.pessoaId = this.id;
    hist.preferencia = this.preferencia;
    hist.alteracoesApetite = this.alteracoesApetite;
    hist.inicioObesidade = this.inicioObesidade;
    hist.dieta = this.dieta;
    hist.refeicoesDia = this.refeicoesDia;
    hist.agua = this.agua;
    hist.sal = this.sal;
    hist.oleo = this.oleo;
    hist.suplementos = this.suplementos;
    hist.indicacao = this.indicacao;

    this.urlService.sendPostRequestHistoricoAlimentar(hist).subscribe(
      err => {
        console.log(err);
      }
    );
  }

  social() {
    const social: Social = new Social;
    social.cargaHoraria = this.cargaHoraria;
    social.pessoaId = this.id;
    social.compFamiliar = this.compFamiliar;
    social.compraAlimentos = this.compraAlimentos;
    social.preparaRefeicoes = this.preparaRefeicoes;
    social.profissao = this.profissao;
    social.realizaRefeicoes = this.realizaRefeicoes;

    this.urlService.sendPostRequestSocial(social).subscribe(
      err => {
        console.log(err);
      }
    );
  }

  recordatario() {
    const recor: Recordatario = new Recordatario;
    recor.almoco = this.almoco;
    recor.pessoaId = this.id;
    recor.ceia = this.ceia;
    recor.desjejum = this.desjejum;
    recor.lanche = this.lanche;
    recor.janta = this.jantar;
    recor.foraHora = this.foraHora;

    this.urlService.sendPostRequestRecordatarioHabitual(recor).subscribe(
      err => {
        console.log(err);
      }
    );

  }


// PUT

updatePessoa() {

}

}
