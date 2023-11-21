/**
 * https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test
 */
/// <reference types="Cypress" />

const { expect } = require("chai")

describe('True Test', () => {
  it('Does not do mush!', () => {
    expect(true).to.equal(true)
  })
})

describe('False Test', () => {
  it('Does not do mush!', () => {
    expect(true).to.equal(false)
  })
})

describe('Visits the Kitchen Sink First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Query for an element', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type')
  })
})

describe('Click an element', () => {
  it('clicks the link "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
})

describe('Make an assertion', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
  })

  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})