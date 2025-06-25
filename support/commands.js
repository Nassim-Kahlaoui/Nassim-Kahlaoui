import { selectors } from '../fixtures/selectors';

Cypress.Commands.add('registerUser', (user) => {
  cy.get(selectors.signupNameInput).type(user.name);
  cy.get(selectors.signupEmailInput).type(user.email);
  cy.get(selectors.signupButton).click();

  // Remplir formulaire complet (exemple simple)
  cy.get('#id_gender1').check();
  cy.get('#password').type(user.password);
  cy.get('#days').select('10');
  cy.get('#months').select('June');
  cy.get('#years').select('1995');
  cy.get('#first_name').type(user.firstName);
  cy.get('#last_name').type(user.lastName);
  cy.get('#address1').type(user.address);
  cy.get('#country').select(user.country);
  cy.get('#state').type(user.state);
  cy.get('#city').type(user.city);
  cy.get('#zipcode').type(user.zipcode);
  cy.get('#mobile_number').type(user.mobile);
  cy.get('button[data-qa="create-account"]').click();
});

Cypress.Commands.add('loginUser', (email, password) => {
  cy.get(selectors.loginEmailInput).type(email);
  cy.get(selectors.loginPasswordInput).type(password);
  cy.get(selectors.loginButton).click();
});

Cypress.Commands.add('addFirstProductToCart', () => {
  cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
  cy.contains('Add to cart').click();
  cy.contains('View Cart').click();
});

Cypress.Commands.add('proceedToCheckout', () => {
  cy.contains('Proceed To Checkout').click();
});

Cypress.Commands.add('deleteAccount', () => {
  cy.contains('Delete Account').click();
  cy.contains('Account Deleted!').should('be.visible');
});
