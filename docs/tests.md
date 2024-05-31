# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Visualizar conteúdo estático**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a página inicial; <br> 2) Navegar para as próximas páginas pelo menu de navegação ou ferramenta de próxima página; <br> 3) Verificar se o conteúdo da pagina foi carregado corretamente;
**Requisitos associados** | RF-001, RF-002, RF-003,  RF-004, RF-005, RF-007, RF-009, RF-010, RF-013.
**Resultado esperado** | Certificar que o conteúdo textual e visual esteja sendo exibido. 
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Verificar funcionamento dos botões de zoom**
 :--------------: | ------------
**Procedimento**  | 1) Apertar o botão "zoom mais" para aumentar a fonte dos textos e dar zoom nas imagens; <br> 2) Apertar o botão "zoom menos" para diminuir o tamanho da fonte e imagens; <br> 
**Requisitos associados** | RF-012
**Resultado esperado** | Aumento e redução da fonte nos textos e imagens das páginas
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Verificar funcionamento do menu lateral (navegação rápida)**
 :--------------: | ------------
**Procedimento**  | 1) Apertar o botão do menu lateral  para exibir os links para as páginas; <br> 2) Certificar que os links estão redirecionando para a página desejada; <br> 
**Requisitos associados** | RF-008
**Resultado esperado** | Navegar rápido para a página desejada
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Envio de depoimento (Identificado)**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a página de Depoimentos; <br> 2) Preencher o campo "Nome" com um nome válido; <br> 3) Preencher o campo "Depoimento" com um texto válido; <br> 4) Clicar no botão "Enviar depoimento".
**Requisitos associados** | RF-005
**Resultado esperado** | Depoimento enviado.
**Dados de entrada** | 1) Nome; <br> 2) Depoimento.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Envio de depoimento (Anônimo)**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a página de Depoimentos; <br> 2) Deixar o campo "Nome" vazio; <br> 3) Preencher o campo "Depoimento" com um texto válido; <br> 4) Clicar no botão "Enviar depoimento".
**Requisitos associados** | RF-005
**Resultado esperado** | Depoimento enviado de forma anônima.
**Dados de entrada** | Depoimento.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Visualização de depoimentos enviados**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a página de Depoimentos; <br> 2) Verificar se o depoimento foi enviado;
**Requisitos associados** | RF-006
**Resultado esperado** | Depoimentos enviados são exibidos corretamente, com nomes ou de forma anônima conforme enviados.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 -  Responder uma Palavra Corretamente (Palavras Cruzadas)**
 :--------------: | ------------
**Procedimento**  | 1) Clicar no botão "Responder" ao lado de uma pista; <br> 2) Digitar a resposta correta;
**Requisitos associados** | RF-007
**Resultado esperado** | A palavra fica verde indicando que está correta.
**Dados de entrada** | Resposta correta para uma pista específica. Ex.: Pista 1 - Resposta: Tela.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 -  Responder uma Palavra Incorretamente (Palavras Cruzadas)**
 :--------------: | ------------
**Procedimento**  | 1) Clicar no botão "Responder" ao lado de uma pista; <br> 2) Digite uma resposta incorreta.
**Requisitos associados** | RF-007
**Resultado esperado** | A palavra fica vermelha indicando que está incorreta.
**Dados de entrada** | Resposta incorreta para uma pista específica.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT09 -  Utilizar o Botão "Apagar (Palavras Cruzadas)**
 :--------------: | ------------
**Procedimento**  | 1) Insira pelo menos uma palavra correta ou incorreta na grade; <br> 2) Clique no botão "Apagar.
**Requisitos associados** | RF-007	
**Resultado esperado** | Todas as respostas inseridas são removidas da grade.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT10 -  Utilizar o Botão "Solução (Palavras Cruzadas)**
 :--------------: | ------------
**Procedimento**  | 1) Clique no botão "Solução";
**Requisitos associados** | RF-007
**Resultado esperado** | 1) Todas as respostas corretas são automaticamente preenchidas na grade; <br> 2) Todas as palavras ficam verdes indicando que estão corretas; <br> 3) Exibição de um pop-up de parabenização ao acertar todas as palavras.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT11 -  Interação do Usuário com a Interface (Palavras Cruzadas)**
 :--------------: | ------------
**Procedimento**  | 1) Clique em diferentes pistas para responder; <br> 2) Insira respostas em diferentes ordens; <br> 3) Utilize os botões "Responder", "Apagar" e "Solução" em combinação.
**Requisitos associados** | RF-007
**Resultado esperado** | 1) A interface responde corretamente a cada clique; <br> 2) As respostas são inseridas na posição correta conforme a pista selecionada; <br> 3) Os botões funcionam conforme especificado em todos os cenários testados.
**Dados de entrada** | Respostas corretas e incorretas para várias pistas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT12 - Acessar a página "Passeio Tecnológico"**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial; <br> 2) Localize o card "Clube do Saber" descendo a página e o acesse; <br> 3) Na página do "Clube do Saber", localize o card "Passeio Tecnológico" ao final da página e o acesse.
**Requisitos associados** | RF-007
**Resultado esperado** | 1) A página "Clube do Saber" deve ser facilmente acessada a partir dos cards da página inicial; <br> 2) A página "Passeio Tecnológico" deve ser facilmente localizada na página "Clube do Saber"; <br> 3) Os cards de acesso às páginas mencionadas devem funcionar corretamente.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT13 - Acessar perguntas do quiz e responder corretamente (Passeio Tecnológico)**
 :--------------: | ------------
**Procedimento**  | 1) Clique em um dos círculos numerados; <br> 2) Selecione a resposta correta para a pergunta feita; <br> 3) Clique no botão "Enviar Resposta"; <br> 4) Clique no botão "OK" do pop up que aparecer.
**Requisitos associados** | RF-007
**Resultado esperado** | 1) Os círculos numerados devem responder ao clique, apresentando um pop up contendo uma pergunta e três opções de resposta; <br> 2) O botão "Enviar a Resposta" deve fazer com que a resposta correta seja submetida e retornar um pop up informando "Resposta correta! Avance para a próxima etapa!"; <br> 3) O botão "OK" do pop up que informa que a resposta está correta deve funcionar para fechar o pop up.
**Dados de entrada** | Resposta correta.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT14 - Acessar perguntas do quiz e responder incorretamente (Passeio Tecnológico)**
 :--------------: | ------------
**Procedimento**  | 1) Clique em um dos círculos numerados; <br> 2) Selecione a resposta incorreta para a pergunta feita; <br> 3) Clique no botão "Enviar Resposta"; <br> 4) Clique no botão "OK" do pop up que aparecer.
**Requisitos associados** | RF-007
**Resultado esperado** | 1) Os círculos numerados devem responder ao clique, apresentando um pop up contendo uma pergunta e três opções de resposta; <br> 2) O botão "Enviar a Resposta" deve fazer com que a resposta incorreta seja submetida e retornar um pop up informando "Tente novamente"; <br> 3) O botão "OK" do pop up que orienta a tentar novamente deve funcionar para fechá-lo e manter a visualização do pop up contendo a pergunta e as três opções de resposta.
**Dados de entrada** | Resposta incorreta.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT15 - Utilizar o botão "Parabéns!" (Passeio Tecnológico)**
 :--------------: | ------------
**Procedimento**  | 1) Clique no botão "Parabéns!" ao final da página "Passeio Tecnológico".
**Requisitos associados** | RF-007
**Resultado esperado** | 1) O clique no botão "Parabéns!" deverá retornar o usuário à página "Clube do Saber".
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.


**Caso de Teste** | **CT16 - Adequação da aplicação às heurísticas de Nielsen**
 :--------------: | ------------
**Procedimento**  | 1) Acesse as páginas da aplicação.<br> 2) De acordo com as heurísticas de Nielsen, foram implementadas interfaces simples e de fácil reconhecimento pelo usuário.
**Requisitos associados** | RNF-003
**Resultado esperado** | O usuário deve conseguir navegar de maneira simples, eficiente e intuitiva.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Visualizar conteúdo estático*                                         |
|---|---|
|Requisito Associado |RF-001 - A aplicação deve conter uma página inicial para apresentar o propósito do projeto e informar sobre o funcionamento da aplicação.|
|Requisito Associado | RF-002	A aplicação deve conter uma página de glossário onde o usuário poderá encontrar as definições de palavras mais usadas em um contexto digital.
|Requisito Associado | RF-003	A aplicação deve conter a página “Real ou falso?" para que o usuário possa encontrar as principais agências que checam a veracidade das notícias do Brasil.
|Requisito Associado | RF-004	A aplicação deve conter a página “Leis Digitais” com informações de leis referentes a golpes virtuais.
|Requisito Associado | RF-005	A aplicação deve disponibilizar a página “Depoimentos” onde o usuário poderá informar seu nome ou comentar de forma anônima em forma de depoimento.
|Requisito Associado | RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.
|Requisito Associado | RF-009	A aplicação deve conter a página “Como identificar um golpe” a qual o usuário aprenderá a identificar os tipos de golpes digitais e como se prevenir de perigos online.
|Requisito Associado | RF-010	A aplicação deve conter a página “Ajuda” com acesso a links de sites para ajudar a indentificar tipos de golpes.
|Requisito Associado | RF-013	A aplicação deve conter a página "introdução tecnológica", a qual irá conter informações breves sobre as tecnologias até os tempos de hoje e dicas sobre o uso do computador.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |  

|*Caso de Teste*                                 |*CT02 - Verificar funcionamento dos botões de zoom*                                        |
|---|---|
|Requisito Associado |RF-012	A aplicação deve conter a ferramenta de lupa para controlar o zoom do site.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT03 - Verificar funcionamento do menu lateral (navegação rápida)*                                        |
|---|---|
|Requisito Associado |RF-008	A aplicação deve conter uma ferramenta de pesquisa onde serão listados interesses pré-definidos com base no público-alvo.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT04 - CT04 - Envio de depoimento (Identificado)*                                        |
|---|---|
|Requisito Associado |RF-005 A aplicação deve disponibilizar a página “Depoimentos” onde o usuário poderá informar seu nome ou comentar de forma anônima em forma de depoimento.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT05 - CT05 - Envio de depoimento (Anônimo)*                                        |
|---|---|
|Requisito Associado |RF-005	A aplicação deve disponibilizar a página “Depoimentos” onde o usuário poderá informar seu nome ou comentar de forma anônima em forma de depoimento.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT06 - CT06 - Visualização de depoimentos enviados*                                        |
|---|---|
|Requisito Associado |RF-006	A aplicação deve permitir que o usuário possa visualizar comentários de outros usuários.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT07 - CT07 - Responder uma Palavra Corretamente (Palavras Cruzadas)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT08 - CT08 - Responder uma Palavra Incorretamente (Palavras Cruzadas)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT09 - CT09 - Utilizar o Botão "Apagar (Palavras Cruzadas)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT10 - CT10 - Utilizar o Botão "Solução (Palavras Cruzadas)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT11 - CT11 - Interação do Usuário com a Interface (Palavras Cruzadas)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT12 - CT12 - Acessar a página "Passeio Tecnológico"*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT13 - CT13 - Acessar perguntas do quiz e responder corretamente (Passeio Tecnológico)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT14 - CT14 - Acessar perguntas do quiz e responder incorretamente (Passeio Tecnológico)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT15 - CT15 - Utilizar o botão "Parabéns!" (Passeio Tecnológico)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT16 - CT16 - Adequação da aplicação às heurísticas de Nielsen*                                        |
|---|---|
|Requisito Associado |RNF-003	A aplicação deve seguir o padrão das heurísticas de Nielsen.|
|Link do vídeo do teste realizado: |  | 

## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



