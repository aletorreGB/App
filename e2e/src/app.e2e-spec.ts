import { browser, element, by} from 'protractor';

describe('Mi prueba',()=>{
    // codigo de configuración
    beforeEach(()=>{
        browser.get("/home");

  });
    it("El usuario puede navegar a la pestaña hija",async ()=>{
        await element(by.css("[ion-item]")).click();
        await browser.waitForAngularEnabled(false);
        browser.driver.sleep(2000);
        expect(element(by.css(".ion-item")).getText()).toContain("detalle");
    });
});



