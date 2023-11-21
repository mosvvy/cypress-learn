describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
      /**
       * admin:
       *  demo_admin
       *  demo_admin123
       * customer:
       *  roni_cost@example.com
       *  roni_cost3@example.com
       */
      cy.contains('Sign In').click()

      cy.get('[id=email]').type('roni_cost@example.com')
      cy.get('.input-text[id=pass]').first().type('roni_cost3@example.com')
      cy.get('.primary[id=send2]').first().click()

      cy.wait(1000)
      cy.get('span.logged-in').first().should('have.text', 'Welcome, Veronica Costello!')
    })
  })