# Aplicação Angular, para realizar chamadas HTTP. Passos iniciais:

1 -   Instale o Git e o VSCode.

2 -   Crie uma pasta para o projeto em seu computador, e inicie um repositório Git nele. ( instale o Git antes e com isso ao clicar com o botão direito na pasta, irá aparecer iniciat Git bash.)

3 -   Escreva no terminal bash o seguinte comando : git init 

4 -   Agora clone o repositório com o comando: git clone https://github.com/sunderhus/AngularApp.git

## Adicionando serviços para chamada http

1 -   Para adicionar serviços ( componentes responsáveis por realizar chamadas http ou troca de informações entre componentes), para utilizar o seguinte comando: `ng g s nome-do-seu-servico`.

2 -   No arquivo `app.module.ts` realizar um import do módulo http presente no core do Angular. `import { HttpClientModule } from '@angular/common/http';`

3 -   Ainda no arquivo `app.module.ts` dentro da Notation `@NgModule` na parte de imports[], adicione o `HttpCLientModule` que foi importado no passo anterior, dentro do array de `imports[]`. Com isso sua aplicação terá acesso ao httpClient do Angular.

4 -   Dentro de um componente, como por exemplo, no já criado, `lis-component.ts`, realize a injeção de dependencia do serviço. Para isso faça o import dele : ` import { HttpService } from '../http.service'; ` e no seu construtor injete o serviço: 
`  constructor(private _http: HttpService) { } `. 

5 -   Nesta aplicação , já foi criado um serviço para te guiar, chamado `http.service.ts`, dentro deste arquivo, temos um método GET para uma api externa, cuja Url da API  é : `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10` .

6 -   Concluindo, para usar o serviço, dentro do corpo do metodo ngOnInit(), faça a uso da injeção do serviço. Teremos portanto um código como esse: `
   ngOnInit() {
    this._http.buscarItens().subscribe(data => {
      this.itens = data;
      console.log(this.itens);
    });
  }
`

7 -  Veja no console do seu browser na aba de desenvolvedor, o retorno escrito com o comando `console.log(this.itens)`, compare o objeto recebido com a estrutura do template de listagem `list.component.html`, onde ocorre a montagem do que o usuário irá visualizar.

## Ok, mas como fazer a aplicação rodar no browser?

1 -  Na linha de comando do cli/Angular execute ou `ng serve -o` ou `npm run start`. Seu browser irá abrir em localhost na porta onde estamos rodando a aplicação.


##Lista de comandos úteis para gerar diferentes componentes.
Rode o comando no terminal do VSCode:  `ng generate component component-name` para gerar um componente novo.
Segue a lista de outros hooks para criação via linha cli do angular: `ng generate directive|pipe|service|class|guard|interface|enum|module    respectivo-nome-a-ser-associado-ao-tipo`.


### Não pare por aí, implemente mais serviços e cria mais telas!

## Melhorou ou ajustou a aplicação, faça Pull Requests!!

Ajude futuros devs, tornando esta aplicação mais fácil e mais completa para quem está começando  no Angular e em chamadas HTTP. Ao corrigir bugs ou implementar features, realize um pull request. Estarei muito feliz em revisar e aceitar seu PR.


