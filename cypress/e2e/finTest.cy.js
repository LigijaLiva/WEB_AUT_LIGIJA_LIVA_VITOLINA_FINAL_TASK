import { PracticeFormPage } from "../pageObjects/FormPage";

describe("Automation Practice Form Tests", () => {
  it("Completes and submits the form with valid data", () => {
    PracticeFormPage.openForm();

    PracticeFormPage.fillFirstName("Ligija Liva");
    PracticeFormPage.fillLastName("Vitolina");
    PracticeFormPage.fillEmail("ligijaliva.vitolina@va.lv");
    PracticeFormPage.chooseGender();
    PracticeFormPage.fillPhone("22315799");
    PracticeFormPage.pickBirthDate("February", "1930", "28");

    PracticeFormPage.selectSubject("Economics");
    PracticeFormPage.selectHobbyMusic();

    PracticeFormPage.uploadPicture("cypress/files/img.png");
    PracticeFormPage.enterAddress("Krumu iela 10a");

    PracticeFormPage.selectState("NCR");
    PracticeFormPage.selectCity("Delhi");

    PracticeFormPage.clickSubmit();

    PracticeFormPage.checkModalContains([
      "Ligija Liva Vitolina",
      "ligijaliva.vitolina@va.lv",
      "Female",
      "22315799",
      "28 February,1930",
      "Economics",
      "Music",
      "img.png",
      "Krumu iela 10a",
      "NCR Delhi"
    ]);
  });
});
