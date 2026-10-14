# Automação de Testes E2E - Hub de Leitura (Cypress + Cucumber)

Projeto de automação de testes End-to-End (E2E) desenvolvido para validar as funcionalidades do painel administrativo do sistema **Hub de Leitura**, aplicando a abordagem **BDD (Behavior-Driven Development)** com **Cypress** e **Cucumber**.

---

## 🛠️ Tecnologias Utilizadas

* **Cypress** - Framework moderno de testes E2E para aplicações web.
* **Cucumber (`@badeball/cypress-cucumber-preprocessor`)** - Ferramenta BDD para a escrita e execução de cenários em Gherkin (`.feature`).
* **esbuild** - Empacotador de alta performance integrado ao Cypress para pré-processamento dos arquivos de teste.
* **JavaScript** - Linguagem utilizada na implementação dos passos (*steps*) e comandos personalizados.
* **Node.js** - Ambiente de execução JavaScript.

---

## 📋 Funcionalidades Testadas (BDD)

Os cenários automatizados cobrem o fluxo de administração de livros (`admin-livros.feature`):

* **Adicionar Livro:** Cadastro de novos livros informando título, autor, categoria e quantidade de cópias, validando a mensagem de sucesso (`"Livro adicionado com sucesso!"`).
* **Editar Livro:** Modificação de detalhes de um livro existente no catálogo, validando a mensagem de atualização (`"Livro atualizado com sucesso!"`).
* **Remover Livro:** Exclusão de registros do sistema com confirmação via interface, validando a mensagem de exclusão (`"Livro excluído com sucesso!"`).

---

## 📂 Estrutura do Projeto

* `cypress/e2e/`: Contém os arquivos de especificação `.feature` (cenários BDD em português).
* `cypress/support/step_definitions/`: Contém o mapeamento de *Steps* (ex: `admin-livros.step.js`), traduzindo as regras BDD em ações reais no navegador.
* `cypress/support/commands.js`: Comandos customizados reutilizáveis, como o `cy.login()` (executado via `beforeEach`) e a função `cy.AdicionarLivro()`.
* `cypress.config.js`: Arquivo de configuração principal do Cypress integrando o pré-processador Cucumber com `esbuild` e definindo a `baseUrl` local.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão 14 ou superior)
* npm ou yarn
* Git

### 1. Clone o repositório
```bash
git clone [https://github.com/AlexandreLuan/cucumber-cypress-ex.git](https://github.com/AlexandreLuan/cucumber-cypress-ex.git)
cd cucumber-cypress-ex

---

## 👨‍💻 Autor

Desenvolvido por **Alexandre Luan**. Sinta-se à vontade para explorar o código, clonar o repositório e conectar-se para trocar experiências sobre Quality Assurance e automação de testes!
