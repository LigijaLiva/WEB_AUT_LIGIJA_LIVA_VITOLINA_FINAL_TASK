import { BasePage } from "./basePage";

export class PracticeFormPage extends BasePage {
    static openForm() {
        cy.visit("https://demoqa.com/automation-practice-form");
    }

    static fillFirstName(value) {
        cy.get("#firstName").type(value);
    }

    static fillLastName(value) {
        cy.get("#lastName").type(value);
    }

    static fillEmail(value) {
        cy.get("#userEmail").type(value);
    }

    static chooseGender() {
        cy.get("label[for='gender-radio-2']").click(); // Female
    }

    static fillPhone(value) {
        cy.get("#userNumber").type(value);
    }

    static pickBirthDate(month, year, day) {
        cy.get("#dateOfBirthInput").click();
        cy.get(".react-datepicker__month-select").select(month);
        cy.get(".react-datepicker__year-select").select(year);
        cy.get(`.react-datepicker__day--0${day}:not(.react-datepicker__day--outside-month)`).click();
    }

    static selectSubject(subject) {
        cy.get("#subjectsInput").type(`${subject}{enter}`);
    }

    static selectHobbyMusic() {
        cy.get("label[for='hobbies-checkbox-3']").click(); // Music
    }

    static uploadPicture(filePath) {
        cy.get("#uploadPicture").selectFile(filePath);
    }

    static enterAddress(address) {
        cy.get("#currentAddress").type(address);
    }

    static selectState(state) {
        cy.get("#react-select-3-input").type(`${state}{enter}`, { force: true });
    }

    static selectCity(city) {
        cy.get("#react-select-4-input").type(`${city}{enter}`, { force: true });
    }

    static clickSubmit() {
        cy.get("#submit").click();
    }

    static checkModalContains(contentArray) {
        contentArray.forEach((text) => {
            cy.get(".modal-content").should("contain", text);
        });
    }
}
