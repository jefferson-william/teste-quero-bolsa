context('Bolsas de estudos', () => {
  before(() => {
    cy.visit('http://localhost:3000').wait(1000)
  })

  describe('Adicionar bolsa', () => {
    it('Adicionar duas bolsas sem filtro.', () => {
      cy.get('#AddScholarship').click()

      cy.get('.modal-scholarship:eq(0), .modal-scholarship:eq(1)').click({
        multiple: true,
      })

      cy.contains('.modal-scholarship__name:eq(0)', 'Arquitetura e Urbanismo')

      cy.get('.add-scholarship-modal__buttons .button--submit').click()

      cy.get('.scholarship').should('have.length', 2)
    })

    it('Adicionar uma bolsa com filtro.', () => {
      cy.get('#AddScholarship').click()

      cy.get('#CheckboxDistanceLearning').click()

      cy.get('.modal-scholarship:eq(0)').click()

      cy.get('.add-scholarship-modal__buttons .button--submit').click()

      cy.get('.scholarship').should('have.length', 3)
    })
  })

  describe('Excluir bolsa', () => {
    it('Excluir todas as bolsas.', () => {
      cy.get('.scholarship__buttons')
        .find('button:eq(0)')
        .click({ multiple: true })

      cy.get('.scholarship').should('have.length', 0)
    })
  })
})
