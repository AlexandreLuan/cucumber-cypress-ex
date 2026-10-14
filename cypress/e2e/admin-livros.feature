# language: pt

Funcionalidade: Administrar livros Hub de Leitura
Como um administrador do sistema Hub de Leitura
Quero adicionar, editar e remover livros
Para quem eu possa manter o catálogo de livros atualizado

Cenário: Adicionar um novo livro
    Dado que eu estou na página de administrador de livros
    Quando eu clico adiciono um novo livro com os dados obrigatórios
    Então deve aparecer uma mensagem de sucesso: "Livro adicionado com sucesso!"

Cenário: Editar um livro existente
    Dado que eu estou na página de administrador de livros
    E existe um livro listado no catálogo
    Quando eu edito os detalhes do livro
    Então deve aparecer uma mensagem de atualização: "Livro atualizado com sucesso!"

Cenário: Remover um livro existente
    Dado que eu estou na página de administrador de livros
    E existe um livro listado no catálogo
    Quando eu removo o livro do catálogo
    Então deve aparecer uma mensagem de exclusão: "Livro excluído com sucesso!"

    