import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  Pessoa,
  Antropometricos,
  AtividadeFisica,
  DadosClinicos,
  Endereco,
  ExameBioquimico,
  FrequenciaAlimentar,
  Recordatario,
  Social,
  HistoricoAlimentar,
  Imc
} from "./model/url.model";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class UrlService {
  pessoa: Pessoa;

  //public API = "https://6efef1c7.ngrok.io";
  public API="http://localhost:8083";

  constructor(private httpClient: HttpClient, private http: Http) {}

  //GET

  public sendGetRequestPessoa(page:number): Observable<any> {
    const url = `${this.API}/pessoa?pagina=`+page+`&qtd=5`;
    return this.httpClient.get(url);
  }

  public sendGetRequestPessoaNome(page:number,nome:string): Observable<any> {
    const url = `${this.API}/pessoa?pagina=`+page+`&qtd=10&nome=`+nome;
    return this.httpClient.get(url);
  }

  public sendGetRequestTotalPaginas(): Observable<any> {
    const url = `${this.API}/pessoa?pagina=0&qtd=5`;
    return this.httpClient.get(url);
  }


  public sendGetRequestPessoaId(id: any): Observable<any> {
    const url = `${this.API}/pessoa/` + id;
    return this.httpClient.get(url);
  }
  public sendGetRequestHistoricoId(id: any): Observable<any> {
    const url = `${this.API}/historicoAlimentar/` + id;
    return this.httpClient.get(url);
  }
  public sendGetRequestAntropometricosId(id: any): Observable<any> {
    const url = `${this.API}/antropemetricos/` + id;
    return this.httpClient.get(url);
  }

  public sendGetRequestAtividadeId(id: any): Observable<any> {
    const url = `${this.API}/atividadeFisica/` + id;
    return this.httpClient.get(url);
  }

  public sendGetRequestExameId(id: any): Observable<any> {
    const url = `${this.API}/exameBioquimico/` + id;
    return this.httpClient.get(url);
  }

  public sendGetRequestDadosId(id: any): Observable<any> {
    const url = `${this.API}/dadosClinicos/` + id;
    return this.httpClient.get(url);
  }

  public sendGetRequestEnderecoId(id: any): Observable<any> {
    const url = `${this.API}/endereco/` + id;
    return this.httpClient.get(url);
  }

  public sendGetRequestHistorico(): Observable<any> {
    const url = `${this.API}/historicoAlimentar`;
    return this.httpClient.get(url);
  }

  public sendGetRequestAntropometricos(): Observable<any> {
    const url = `${this.API}/antropemetricos`;
    return this.httpClient.get(url);
  }

  public sendGetRequestAtividadeFisica(): Observable<any> {
    const url = `${this.API}/atividadeFisica`;
    return this.httpClient.get(url);
  }

  public sendGetRequestDadosClinicos(): Observable<any> {
    const url = `${this.API}/dadosClinicos`;
    return this.httpClient.get(url);
  }

  public sendGetRequestEndereco(): Observable<any> {
    const url = `${this.API}/endereco`;
    return this.httpClient.get(url);
  }

  public sendGetRequestExameBioquimico(): Observable<any> {
    const url = `${this.API}/exameBioquimico`;
    return this.httpClient.get(url);
  }

  public sendGetRequestFrequenciaAlimentar(): Observable<any> {
    const url = `${this.API}/frequenciaAlimentar`;
    return this.httpClient.get(url);
  }

  public sendGetRequestFreqId(id: any): Observable<any> {
    const url = `${this.API}/frequenciaAlimentar/` + id;
    return this.httpClient.get(url);
  }

  public sendGetRequestRecorId(id: any): Observable<any> {
    const url = `${this.API}/recordatorioHabitual/` + id;
    return this.httpClient.get(url);
  }

  public sendGetRequestSocialId(id: any): Observable<any> {
    const url = `${this.API}/social/` + id;
    return this.httpClient.get(url);
  }
  

  public sendGetRequestRecordatorioHabitual(): Observable<any> {
    const url = `${this.API}/recordatorioHabitual`;
    return this.httpClient.get(url);
  }

  public sendGetRequestSocial(): Observable<any> {
    const url = `${this.API}/social`;
    return this.httpClient.get(url);
  }
//---------------------------------------------------------------------------
  // POST

  public sendPostRequestPessoa(pessoa: Pessoa) {
    const url = `${this.API}/pessoa`;
    return this.http.post(url, pessoa).pipe(map(res => res.json()));
  }

  public sendPostRequestAntropometricos(antropometricos: Antropometricos) {
    const url = `${this.API}/antropemetricos`;
    return this.http.post(url, antropometricos).pipe(map(res => res.json()));
  }

  public sendPostRequestAtividadeFisica(pessoa: AtividadeFisica) {
    const url = `${this.API}/atividadeFisica`;
    return this.http.post(url, pessoa).pipe(map(res => res.json()));
  }

  public sendPostRequestDadosClinicos(pessoa: DadosClinicos) {
    const url = `${this.API}/dadosClinicos`;
    return this.http.post(url, pessoa).pipe(map(res => res.json()));
  }

  public sendPostRequestEndereco(pessoa: Endereco) {
    const url = `${this.API}/endereco`;
    return this.http.post(url, pessoa).pipe(map(res => res.json()));
  }

  public sendPostRequestExameBioquimico(pessoa: ExameBioquimico) {
    const url = `${this.API}/exameBioquimico`;
    return this.http.post(url, pessoa).pipe(map(res => res.json()));
  }

  public sendPostRequestFrequenciaAlimentar(pessoa: FrequenciaAlimentar) {
    const url = `${this.API}/frequenciaAlimentar`;
    return this.http.post(url, pessoa).pipe(map(res => res.json()));
  }

  public sendPostRequestRecordatarioHabitual(pessoa: Recordatario) {
    const url = `${this.API}/recordatorioHabitual`;
    return this.http.post(url, pessoa).pipe(map(res => res.json()));
  }

  public sendPostRequestSocial(pessoa: Social) {
    const url = `${this.API}/social`;
    return this.http.post(url, pessoa).pipe(map(res => res.json()));
  }

  public sendPostRequestHistoricoAlimentar(pessoa: HistoricoAlimentar) {
    const url = `${this.API}/historicoAlimentar`;
    return this.http.post(url, pessoa).pipe(map(res => res.json()));
  }

  public sendPostRequestImc(imc: Imc) {
    const url = `${this.API}/imc`;
    return this.http.post(url, imc).pipe(map(res => res.json()));
  }


//POST
public sendPutRequestPessoa(pessoa: Pessoa) {
  const url = `${this.API}/pessoa`;
  return this.http.put(url, pessoa).pipe(map(res => res.json()));
}

//---------------------------------------------------------------------------
  // DELETE

  public sendDeleteRequestPessoa(id:number) {
    const url = `${this.API}/pessoa/`+id;
    return this.http.delete(url);
  }


}
