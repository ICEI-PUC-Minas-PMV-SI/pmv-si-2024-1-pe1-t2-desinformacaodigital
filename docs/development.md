# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001 | A aplicação deve conter uma página inicial para apresentar o propósito do projeto e informar sobre o funcionamento da aplicação. | Jennifer | index.html / style.css |
|RF-014 | A aplicação deve conter a página "introdução tecnológica", a qual irá conter informações breves sobre as tecnologias até os tempos de hoje e dicas sobre o uso do computador. | Jennifer | introduçãotecnologica.html / intro.css |
|RF-004| A aplicação deve conter a página “Real ou falso?" para que o usuário possa encontrar as principais agências que checam a veracidade das notícias do Brasil. | Amanda | realoufalso.html / realoufalso.css |
|RF-005| A aplicação deve conter a página “Leis Digitais” com informações de leis referentes a golpes virtuais.	| João Eduardo | leisdigitais.html / leisdigitais.css | 
|RF-002| A aplicação deve conter uma página de glossário onde o usuário poderá encontrar as definições de palavras mais usadas em um contexto digital. | Ester / João Eduardo | glossario.html / glossario.css |
|RF-006| A aplicação deve disponibilizar a página “Depoimentos” onde o usuário poderá informar seu nome ou comentar de forma anônima em forma de depoimento. | Ester | depoimentos.html / depoimentos.css |
|RF-007| A aplicação deve permitir que o usuário possa visualizar comentários de outros usuários. | Ester | depoimentos.html / depoimentos.css |
|RF-008| A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz. | Amanda, Daniel Vitor, Ester, Jennifer, João, Luís | clubedosaber.html / clubedosaber.css / forca.css / forca.html / palavrascruzadas.html / palavrascruzadas.css / passeiotecnologico.html / passeiotecnologico |
|RF-010| A aplicação deve conter a página “Como identificar um golpe” a qual o usuário aprenderá a identificar os tipos de golpes digitais e como se prevenir de perigos online.	| Daniel Vitor | identgolpe.html / identgolpe.css / gopix.html / gopix.css / phis.html / phis.css / wpp.html / wpp.css |
|RF-011| A aplicação deve conter a página “Ajuda” com acesso a links de sites para ajudar a indentificar tipos de golpes.	| Ester, Luis Duarte | ajuda.html / ajuda.css |
|RF-012| Dentro da página “Ajuda” haverá o campo de comentário “precisa de ajuda?”, no qual o usuário poderá mandar uma demanda privada. Será necessário inserir um e-mail, telefone e endereço para contato. A solicitação será enviada a uma conta de e-mail própria da aplicação em que um voluntário do projeto poderá entrar em contato com o usuário para prestar apoio e esclarecer dúvidas.| Luis Duarte | ajuda.html / ajuda.css |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único do usuário            | 1                                              |
| Nome         | Texto             | Nome do usuário                         | João da Silva                                   |
| Telefone       | Número             | Telefone do usuário                       | (12) 3456-7890                            |
| E-mail  | Texto  | Endereço de e-mail do usuário | joao.silva@email.com                                              |
| Estado | Texto | Unidade Federativa do usuário| XY |
| Idade | Número | Idade do usuário | 60 |
| Descrição | Texto | Descrição da dúvida do usuário | Preciso de ajuda com meu celular | 
| Depoimento | Texto | Descrição do depoimento do usuário | Gostaria de compartilhar minha experiência...|
