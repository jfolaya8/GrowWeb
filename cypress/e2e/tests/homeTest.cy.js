import HomePage from '../pages/homePage'

describe('Verify course experience', () => {

  const homePage = new HomePage();

    beforeEach( () => {
      cy.visit('/')
      homePage.acceptCookies();
    })

    it('Verify random country and course', () => {
      homePage.selectRandomCountry();
      homePage.selectRandomCourse();
      homePage.search()
      cy.get(homePage.locators.resultLabel).then(($p) => {
        const match = $p.text().match(/^[1-9]\d*/)
        try {
            expect(match).to.exist;
          } catch (error) {
            throw new Error(`Not found experiences`);
        }
      })
    })

    it('Verify all countries and courses', () => {
      homePage.verifyAllCountries();
    })

  })
