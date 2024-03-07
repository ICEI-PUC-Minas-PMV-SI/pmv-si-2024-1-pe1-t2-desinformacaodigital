# Especificações do Projeto 

Diante da ampla disseminação de desinformação na internet e avanços tecnológicos, nossa aplicação web tem como propósito conscientizar e fornecer apoio a população vulnerável com foco para idosos, sobre golpes digitais e desinformação online provenientes de notícias e sites falsos. 
Nesse contexto, buscamos entregar uma aplicação acessível, dar visibilidade as principais causas do analfabetismo digital, analisar os padrões de desinformação online e desenvolver estratégias eficazes para a inclusão da terceira idade no meio digital. 

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001 | A aplicação deve permitir que o usuário gerencie suas tarefas. | ALTA |  
|RF-002 | A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês.   | MÉDIA | 
|RF-003 | A aplicação deve conter uma ferramenta de busca por palavra-chave. | ALTA |
|RF-004 | A aplicação deve conter uma página de glossário. | MÉDIA | 
|RF-005 | A deve permitir a possibilidade de inserir links de redirecionamento e vídeos externos. | ALTA |
|RF-006 | A aplicação deve conter a página “Real ou falso?”para que o usuário possa encontrar as principais agências que checam a veracidade das notícias do Brasil. | ALTA |
|RF-007 | A aplicação deve conter a página “Leis Digitais” com informações de leis referentes a golpes virtuais. | ALTA | 
|RF-008 | A aplicação deve disponibilizar a página “Depoimentos” na qual o usuário poderá inserir e visualizar depoimentos por meio de um comentário. | ALTA | 
|RF-009 | A aplicação deve apresentar um campo de respostas para responder o comentário.  | ALTA | 
|RF-010 | Deve haver uma janela para inserir seu nome e a idade opcional para que possa comentar sem necessidade de login. | ALTA |
|RF-011 | A aplicação deve conter a página “Como identificar um golpe”.  | ALTA | 
|RF-012 | A aplicação deve possuir um layout de fácil entendimento e as seguintes ferramentas de acessibilidade: Lupa e leitor de tela. | ALTA | 
|RF-013 | A aplicação deve conter a página “Ajuda” para apoio e dicas de o que fazer em caso de golpe digital e acessar instituições de apoio. | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva. | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s. |  BAIXA | 
|RNF-003| A aplicação deve ser responsiva e adaptável a qualquer interface. | ALTA |
|RNF-004| A aplicação deve ter boa usabilidade. | ALTA |
|RNF-005| A aplicação deve ser capaz de ser executado nas versões recentes dos navegadores mais utilizados: Chrome, Firefox, Edge e Safari. | ALTA |


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:
- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
