describe('Browse Explore Collection tab', () => {
    before(() => {
        cy.visit('');
    })

    it("should display full collecion elements with proper catagories after clicking 'Browse All Collecions'", () => {
        // go to home page
        // select browse
        // all collection are displaued
        // trending is first


        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })


    it("should display full collecion elements with proper catagories after clicking one of category in 'Bestselling collecions'", () => {
        // go to home page
        // select browse
        // all collection are displaued
        // trending is first


        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("should display full collecion elements with proper catagories after clicking one of category in 'New trending ollecions'", () => {
        // go to home page
        // select browse
        // all collection are displaued
        // trending is first


        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })
    // it("Multi plate discount", () => {
    //     //generate mulit plate discount code (eg 3 plates 30% off)
    //     // add 1 plates to cart
    //     //use discount code
    //     // code works discount not applied
    //     // add rest of plate
    //     // discount applied

    //     cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    // })

    // it("Chose Category", () => {
    //     // Go to browse collection
    //     // click categroy dropdow
    //     // chose fantasy
    //     // fantasy plates are displayed

    //     cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    // })

    // it("Sort category Category", () => {
    //     // Go to browse collection
    //     // click categroy dropdow
    //     // chose fantasy
    //     // fantasy plates are displayed
    //     // click sort by
    //     // chose New


    //     cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    // })

})