import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

beforeEach(() => {
    cy.login('admin@biblioteca.com', 'admin123')
});

Given(`que eu estou na página de administrador de livros`, () => {
    cy.visit('admin-books.html')
    cy.get('h1').should('contain', 'Gerenciar Livros')
});

When(`eu clico adiciono um novo livro com os dados obrigatórios`, () => {
    cy.AdicionarLivro('Livro teste', 'Autor Teste', 'Aventura', 2)
});

Then(`deve aparecer uma mensagem de sucesso: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem);
});

Given(`existe um livro listado no catálogo`, () => {
    cy.AdicionarLivro('Livro para manipular', 'Autor Teste', 'Aventura', 2)
    cy.get('#search-input').type('Livro para manipular');
    cy.wait(3000);
});

When(`eu edito os detalhes do livro`, () => {
    cy.get(':nth-child(7) > .btn-outline-primary').click();
    cy.get('#book-category').select('Aventura');
    cy.get('#save-book-btn').click();
    cy.wait(3000);
});

Then(`deve aparecer uma mensagem de atualização: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem);
});

When(`eu removo o livro do catálogo`, () => {
    cy.get('table tbody tr').first().find('.btn-outline-danger').click()
    cy.get('#confirm-delete-btn').click()
    cy.wait(3000)
});

Then(`deve aparecer uma mensagem de exclusão: {string}`, (mensagem) => {
    cy.get('#alert-container').should(($div) => {
        expect($div.text().trim()).to.contain(mensagem);
    });
});

When(`eu adiciono novos livros com os seguintes dados:`, (dataTable) => {
    const books = dataTable.hashes()
    books.forEach(book => {
        cy.AdicionarLivro(book.titulo, book.autor, book.categoria, book.exemplares)
    });
});

When(`eu adiciono livro com {string}, {string}, {string} e {string}`, (titulo, autor, categoria, exemplares) => {
    cy.AdicionarLivro(titulo, autor, categoria, exemplares)
});

Then(`deve aparecer uma mensagem: {string}`, (mensagem) => {
    cy.get('#alert-container').should(($div) => {
        expect($div.text().trim()).to.contain(mensagem);
    });
});

Then(`o formulário de cadastro deve continuar aberto`, () => {
    // Como o navegador barrou o envio por falta do título, o botão de salvar continua na tela
    cy.get('#save-book-btn').should('be.visible');
});