describe('Multiple tests', () => {
  const testGoogle = (name, email) =>

  function () {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();
      cy.get('[data-name="menu"]').click();
      cy.get('[placeholder="Jane Doe"]').type(`${name}`);
      cy.get('.form-inline > [placeholder="Email"]').click();
      cy.get('.form-inline > [placeholder="Email"]').type(`${email}`);
      cy.get('.form-inline > .appearance-filled').click();
      cy.get('.form-inline > nb-checkbox.status-basic > .label > .custom-checkbox').click();
      cy.get('.form-inline > .appearance-filled').click();
  };

it('type', testGoogle('Murachova', '123@gmail.com'));
})

