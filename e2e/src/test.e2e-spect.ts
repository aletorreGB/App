import { browser, element, by} from 'protractor';

describe('Mi prueba',()=>{
    // codigo de configuración
    beforeEach(()=>{
        browser.get("/home");

  });
    it("El usuario puede navegar a la pestaña hija",async ()=>{
        await browser.waitForAngularEnabled(false);
        await element(by.css("[ion-item]")).click();
        browser.driver.sleep(2000);
        expect(element(by.css(".ion-item")).getText()).toContain("detalle");
    });
});