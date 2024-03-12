///<reference types="cypress"/>
describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
     afterEach(() => {
            cy.screenshot ()
    });
it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('kamusalss@gmail.com')
        cy.get('#password').type('kamai666')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, kamusalss')
})
it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('kamusalsss@gmail.com')
    cy.get('#password').type('kamai666')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido.')
    //cy.get('.woocommerce-error').should('exist')
});
it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
cy.get('#username').type('kamusalss@gmail.com')
cy.get('#password').type('kamai667')
cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para')
    cy.get('.woocommerce-error').should('exist')
});
})