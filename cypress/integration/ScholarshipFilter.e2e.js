context('Filtros para adicionar bolsas de estudos', () => {
  before(() => {
    cy.visit('http://localhost:3000').wait(1000)

    cy.get('#AddScholarship').click()
  })

  describe('Filtrando...', () => {
    it('Está filtrando por cidade?', () => {
      cy.get('.modal-scholarship__name:eq(0)')
        .invoke('text')
        .should('eq', 'Arquitetura e Urbanismo')

      cy.get('#Cities').select('São Paulo')

      cy.get('.modal-scholarship__name:eq(0)')
        .invoke('text')
        .should('eq', 'Jornalismo')

      cy.get('#Cities').select('')
    })

    it('Está filtrando por cursos?', () => {
      cy.get('.modal-scholarship__name:eq(0)')
        .invoke('text')
        .should('eq', 'Arquitetura e Urbanismo')

      cy.get('#Courses').select('Jogos Digitais')

      cy.get('.modal-scholarship__name:eq(0)')
        .invoke('text')
        .should('eq', 'Jogos Digitais')

      cy.get('#Courses').select('')
    })

    it('Está filtrando por a distância?', () => {
      cy.get('.modal-scholarship__name:eq(0)')
        .invoke('text')
        .should('eq', 'Arquitetura e Urbanismo')

      cy.get('#CheckboxDistanceLearning').check()

      cy.get('.modal-scholarship__name:eq(0)')
        .invoke('text')
        .should('eq', 'Sistemas de Informação')

      cy.get('#CheckboxDistanceLearning').uncheck()
    })

    it('Está filtrando por até quanto pode pagar?', () => {
      cy.get('.modal-scholarship__name:eq(0)')
        .invoke('text')
        .should('eq', 'Arquitetura e Urbanismo')

      cy.get('#AddScholarshipModal').scrollTo('top')

      cy.get('body').click({ x: 535, y: 395 })

      cy.get('.modal-scholarship__name:eq(0)')
        .invoke('text')
        .should('eq', 'Sistemas de Informação')

      cy.get('.add-scholarship-modal__buttons')
        .find('button:eq(0)')
        .click()

      cy.get('#AddScholarship').click()
    })
  })
})
