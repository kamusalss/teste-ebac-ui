class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos')
     }

     buscarProduto(nomeProduto) {
      cy.get('.search').eq(0).type(nomeProduto)
      cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
     }

     buscarProdutoLista(nomeProduto) {
      cy.get('.product-block > .caption > .meta > .infor > .name')
      .contains(nomeProduto)
      .click()
     }

     visitarProduto(nomeProduto) {
      //cy.visit(`produtos/${nomeProduto}`)
      const urlFormatada = nomeProduto.replace(/ /g, '-')
      cy.visit(`produtos/${urlFormatada}`)
     }

     addProdutoCarrinho(tamanho, cor, quantidade) {
      cy.get('.button-variable-item-' + tamanho).click()
      cy.get(`.button-variable-item-${cor}`).click()
      cy.get('.input-text').clear().type(quantidade)
      cy.get('.single_add_to_cart_button').click()
    }

}

export default new ProdutosPage()