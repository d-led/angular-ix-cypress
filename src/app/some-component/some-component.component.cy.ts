import {SomeComponentComponent} from "./some-component.component";
import {SomeOtherComponentComponent} from "../some-other-component/some-other-component.component";

describe('Some Component', () => {
  it('should pass the value down to the sub-components', () => {
    cy.mount(SomeComponentComponent,{
      componentProperties: {
        someValue: 42
      },
      // this fixed rendering the subcomponent
      declarations: [ SomeOtherComponentComponent ]
    });

    cy.contains(': 42').should('be.visible')
  })
})
