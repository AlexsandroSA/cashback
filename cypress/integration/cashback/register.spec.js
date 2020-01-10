/// <reference types="Cypress" />

context('Login', () => {
    beforeEach(() => {
      cy.visit('https://bcash.herokuapp.com/');
    })

    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
        cy.get('#name')
            .type('fake@email.com')

        cy.get('#cpf')
            .type('79542831862')

        cy.get('#email')
            .type('me@mail.com')

        cy.get('#password')
            .type('123123');

        cy.get('form').submit()

        cy.get('blockquote')
          .should('contain', 'Cadastro realizado com sucesso!');
    })

  })



