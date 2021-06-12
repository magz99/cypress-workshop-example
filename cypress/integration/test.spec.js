/// <reference types="cypress" />
/// http://on.cypress.io/intellisense

describe("Our Tests", ()=>{
  beforeEach("Runs before each it block", ()=>{
    // hook code here
  });

  it("tests our application", ()=>{
    // test code here
    cy.visit("/");
    cy.get('[data-cy="test-logo-font"]') // 9.
      .should('contain', 'conduit');

    cy.get(".container > p").should('contain.text', 'A place to share your Angular knowledge.');
    cy.contains( 'A place to share your Angular knowledge.').should('not.be.undefined');
  });
})

// describe("Creating a Post", ()=>{

//   it("tests our application", ()=>{
//     // test code here
//     cy.visit("/login");
//     cy.get('[data-cy="test-email-input"]') // 9.
//     .should('have.length', 1)
//     .type('ngconfentcypress@testemail.com');

//     cy.get('[data-cy="test-password-input"]')
//     .should('have.length', 1)
//     .type('ngConfEntCypress');

//     cy.get('[data-cy="test-submit-button"]').should('have.length', 1).click();

//     cy.wait(5000);

//     cy.get('[data-cy="test-new-article-link"]').should('have.length', 1).click();

//     cy.get('[data-cy="test-article-title-input"]').should('have.length', 1).type('Hello World, New Article Here');
//     cy.get('[data-cy="test-article-description-input"]').should('have.length', 1).type('This is the best article.');
//     cy.get('[data-cy="test-article-body-input"]').should('have.length', 1).type(`

// Sit as close as possible to warm fire without sitting on cold floor meow and the fat cat sat on the mat bat away with paws. Snuggles up to shoulders or knees and purrs you to sleep shred all toilet paper and spread around the house so thinking longingly about tuna brine bring your owner a dead bird but meow. Pretend you want to go out but then don't flex claws on the human's belly and purr like a lawnmower chase after silly colored fish toys around the house love fish or jump on fridge. The dog smells bad ask for petting.
//     `);
//     cy.get('[data-cy="test-article-tags-input"]').should('have.length', 1).type('cats{enter}');
//     cy.get('[data-cy="test-publish-button"]').should('have.length', 1).click();
//   });
// })

describe("Watching Network Requests", ()=>{

  it("POST to Conduit API", ()=>{

    // test code here
    cy.visit("/login");
    cy.server();

    cy.route('POST', 'https://conduit.productionready.io/api/users/login').as('login');


     cy.get('[data-cy="test-email-input"]') // 9.
     .should('have.length', 1)
     .type('ngconfentcypress@testemail.com');

     cy.get('[data-cy="test-password-input"]')
     .should('have.length', 1)
     .type('ngConfEntCypress');

     cy.get('[data-cy="test-submit-button"]').should('have.length', 1).click();
    //cy.visit( 'https://conduit.productionready.io/api/users/login');
    cy.wait('@login').its('status').should('equal', 200);

    // .then((res) => {
    //   console.log('magz res: ', res);
    // });

    // then(test=>{
    //   console.log('magz test: ', test);
    // });


  });


});
