import {SomeOtherComponentComponent} from "./some-other-component.component";

describe('Some Other Component', () => {
  it('should have a default of 0', () => {
    cy.mount(SomeOtherComponentComponent);

    cy.contains('0').should('be.visible')
  })

  it('should be able to render a different value', () => {
    cy.mount(SomeOtherComponentComponent,{
      componentProperties: {
        value: -42
      }
    });

    cy.contains('-42').should('be.visible')
  })
})
