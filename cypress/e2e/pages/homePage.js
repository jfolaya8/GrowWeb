
class HomePage{

    constructor() {
        this.locators = {
            countryInput: '[data-for="country"]',
            countryList: 'button[name="country"]',
            courseInput: '[data-for="category"]',
            courseList: 'button[name="category"]',
            searchButton: 'button:contains("Buscar experiencias")',
            resultLabel: '.fs-18:contains("Resultado")',
            acceptCookies: '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'
        };
    }


    acceptCookies(){
        cy.get(this.locators.acceptCookies).click();
    }

    selectRandomOption(locator) {
        cy.get(locator).should('be.visible').then(($options) => {
            const randomIndex = Math.floor(Math.random() * $options.length);
            const option = $options.eq(randomIndex);
            option.click();
        });
    }
    
    selectRandomCountry() {
        cy.get(this.locators.countryInput).click({ force: true });
        this.selectRandomOption(this.locators.countryList);
    }

    selectRandomCourse() {
        cy.get(this.locators.courseInput).click({ force: true });
        this.selectRandomOption(this.locators.courseList);
    }

    search() {
        cy.get(this.locators.searchButton).click().wait(1500);
    }

    verifyAllCountries(){
        cy.get(this.locators.countryList).each(($country) => {
            cy.get(this.locators.countryInput).click({ force: true });
            cy.get(this.locators.countryList).contains($country.text()).click({force: true})
            cy.get(this.locators.courseList).each(($course) => {
                cy.get(this.locators.courseInput).click({ force: true });
                cy.get(this.locators.courseList).contains($course.text()).click({force: true})
                this.search();
                cy.get(this.locators.resultLabel).then(($p) => {
                    const match = $p.text().match(/^[1-9]\d*/)
                    if (!match) {
                        throw new Error(`Not experiences for ${$country.text()} - ${$course.text()}`)
                    }
                })
            })
            cy.get(this.locators.courseList).contains('Cualquier tipo de estudios').click({force: true}).wait(1500)
        })
    }

}


export default HomePage;