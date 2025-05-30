export class BasePage {
    static openUrl(url) {
        cy.visit(url);
    }
}