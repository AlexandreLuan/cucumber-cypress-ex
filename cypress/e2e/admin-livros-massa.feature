            #language: pt

            Funcionalidade: Administração de livros Hub de Leitura
            Como um administrador do sistema
            Quero adicionar, editar e remover múltiplos livros de uma única vez
            Para que eu possa gerenciar o catálogo de forma rápida e eficiente

            Cenário: Adicionar novos livros com tabela de exemplos
            Dado que eu estou na página de administrador de livros
            Quando eu adiciono novos livros com os seguintes dados:
            | titulo            | autor         | categoria | exemplares |
            | Livros de teste 1 | Autor teste 1 | Aventura  | 2          |
            | Livros de teste 2 | Autor teste 2 | Infantil  | 30         |
            | Livros de teste 3 | Autor teste 3 | Romance   | 300        |
            Então deve aparecer uma mensagem de sucesso: "Livro adicionado com sucesso!"

            @only
            Esquema do Cenário: Adicionar livros usando esquema do cenário - Livro: "<titulo>", Qtd: "<exemplares>"
            Dado que eu estou na página de administrador de livros
            Quando eu adiciono livro com "<titulo>", "<autor>", "<categoria>" e "<exemplares>"
            Então deve aparecer uma mensagem: "Livro adicionado com sucesso!"

            Exemplos:
            | titulo                         | autor         | categoria | exemplares |
            | Livros de teste 1              | Autor teste 1 | Aventura  | 2          |
            | Li                             | Autor teste 2 | Infantil  | 30         |
            | Livros de teste com nome eno 3 | Autor teste 3 | Romance   | 300        |