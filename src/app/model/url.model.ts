export class Pessoa {
  constructor(
    public nome: string = '',
    public dtNasc: string = '',
    public idade: number = 0,
    public sexo: string = '',
    public id: number = 0
  ) { }
}

export class Array {
  constructor(
    public array: [{
      'id'
    }]
  ) { }
}

export class Antropometricos {
  constructor(
    public pessoaId: number = 0,
    public peso: string = '',
    public pa: string = '',
    public altura: string = '',
    public imc: string = '',
    public pct: string = '',
    public pcb: string = '',
    public pcse: string = '',
    public pcPeitoral: string = '',
    public pcAb: string = '',
    public pcsi: string = '',
    public pcCoxa: string = '',
    public ppcPant: string = '',
    public cBraco: string = '',
    public cAntebraco: string = '',
    public cPunho: string = '',
    public cTorax: string = '',
    public cCintura: string = '',
    public cAbdominal: string = '',
    public cQuadril: string = '',
    public cCoxa: string = '',
    public cPanturrilha: string = '',
    public compleicao: string = '',
    public percentGordura: string = '',
    public percentMusc: string = '',
    public pesoAtual: string = '',
    public pesoIdeal: string = '',
  ) { }
}

export class AtividadeFisica {
  constructor(
    public pessoaId: number = 0,
    public frequencia: string = '',
    public atvFisica: string = '',
    public duracao: string = '',
    public preTreino: string = '',
    public horario: string = ''
  ) { }
}

export class Imc{
  constructor(
    public pessoaId: number = 0,
    public imc: string = ''
  ) { }
}

export class DadosClinicos {
  constructor(
    public pessoaId: number = 0,
    public obsNausea: string = '',
    public obsVomito: string = '',
    public obsMastigacao: string = '',
    public obsDegluticao: string = '',
    public obsDigestao: string = '',
    public obsPirose: string = '',
    public obsRefluxo: string = '',
    public obsDiarrea: string = '',
    public obsObstipacao: string = '',
    public obsInsonia: string = '',
    public obsEstresse: string = '',
    public obsCansaco: string = '',
    public obsAnsiedade: string = '',
    public lesoes: string = '',
    public cirurgia: string = '',
    public outro: string = '',
    public diurese: string = '',
    public patologia: string = '',
    public antecedentes: string = ''
  ) { }
}

export class Endereco {
  constructor(
    public pessoaId: number = 0,
    public endereco: string = '',
    public bairro: string = '',
    public cidade: string = '',
    public estado: string = '',
    public email: string = '',
    public telCelular: string = '',
    public telResidencial: string = '',
    public motivoConsulta: string = '',
    public obs: string = ''
  ) { }
}

export class ExameBioquimico {
  constructor(
    public pessoaId: number = 0,
    public gli: string = '',
    public hg: string = '',
    public tg: string = '',
    public ct: string = '',
    public ldl: string = '',
    public hdl: string = '',
    public medicamentos: string = '',
    public doseMedicamento: string = '',
    public horMedicamento: string = '',
    public motivoMedicamento: string = ''
  ) { }
}

export class FrequenciaAlimentar {
  constructor(
    public pessoaId: number = 0,
    public freqAlimentar: string = '',
    public diagnostico: string = '',
    public relato: string = ''
  ) { }
}

export class HistoricoAlimentar {
  constructor(
    public pessoaId: number = 0,
    public intolerancia: string = '',
    public preferencia: string = '',
    public alteracoesApetite: string = '',
    public inicioObesidade: string = '',
    public dieta: string = '',
    public refeicoesDia: string = '',
    public agua: string = '',
    public sal: string = '',
    public oleo: string = '',
    public suplementos: string = '',
    public indicacao: string = ''
  ) { }
}

export class Social {
  constructor(
    public pessoaId: number = 0,
    public profissao: string = '',
    public cargaHoraria: string = '',
    public compFamiliar: string = '',
    public compraAlimentos: string = '',
    public preparaRefeicoes: string = '',
    public realizaRefeicoes: string = '',
  ) { }
}

export class Recordatario {
  constructor(
    public pessoaId: number = 0,
    public desjejum: string = '',
    public almoco: string = '',
    public lanche: string = '',
    public janta: string = '',
    public ceia: string = '',
    public foraHora: string = '',
  ) { }
}
