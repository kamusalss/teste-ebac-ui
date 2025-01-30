///<reference types="cypress"/>
import { da } from "@faker-js/faker";
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

  it('Deve selecionar um produto da lista', () => {
            produtosPage.buscarProdutoLista('Aether Gym Pant')
            cy.get('#tab-title-description > a').should('exist')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = "Zeppelin Yoga Pant"
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain','Zeppelin Yoga Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 1
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('S', 'Blue', qtd)
        cy.get('.woocommerce-message').should('contain', 'no seu carrinho.')
    });

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
      cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(
        dados[0].tamanho, 
        dados[0].cor,
        dados[0].quantidade)
        cy.get('.woocommerce-message').should('contain', 'no seu carrinho.')
           });
      })

    it.only('Deve adicionar 3 produtos diferentes ao carrinho', () => {
        let qtd = 1
        let produto1 = "Zeppelin Yoga Pant"
        let produto2 = "Circe Hooded Ice Fleece"
        let produto3 = "Josie Yoga Jacket"
        produtosPage.buscarProduto(produto1)
        produtosPage.addProdutoCarrinho('32', 'Blue', qtd)
        produtosPage.buscarProduto(produto2)
        produtosPage.addProdutoCarrinho('S', 'Gray', qtd)
        produtosPage.buscarProduto(produto3)
        produtosPage.addProdutoCarrinho('S', 'Blue', qtd)
        cy.get('.woocommerce-message > .button').click()
        cy.get(':nth-child(1) > .product-name > a').should('contain', produto1)
        cy.get(':nth-child(2) > .product-name > a').should('contain', produto2)
        cy.get(':nth-child(3) > .product-name > a').should('contain', produto3)
    });
      
       
       
       
       
});