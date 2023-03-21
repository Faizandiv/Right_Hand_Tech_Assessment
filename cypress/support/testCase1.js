/// <reference types = "cypress" />
class TestCase1 {
  constructor() {
    this.firstName = 'input[name=first_name]';
    this.lastName = 'input[name=last_name]';
    this.businessName = '.business_name';
    this.email = '.email';
    this.number1 = '#numb1';
    this.number2 = '#numb2';
    this.captchaInput = '#number';
    this.url = 'https://phptravels.com/demo/';
    this.submitUrl = 'https://phptravels.com/hubspot';
    this.demoEmailRequestUrl = 'https://phptravels.com/demo_email'
  }
  visitPage() {
    cy.visit(this.url)

  }



  fillDemoRequestForm() {

    let numb1 = 0;
    let numb2 = 0;
    let res = 0;
    cy.get(this.firstName).type('Faizan', { force: true })
    cy.get(this.lastName).type('Taj', { force: true })
    cy.get(this.businessName).type('QA Test', { force: true })
    cy.get(this.email).type('faizan@test.com', { force: true })

    cy.get(this.number1)
      .invoke('text')
      .then((text) => {
        numb1 = parseInt(text);

      });
    cy.get(this.number2)
      .invoke('text')
      .then((text) => {
        numb2 = parseInt(text);
        res = numb1 + numb2;
        cy.get(this.captchaInput).type(res.toString(), { force: true })
        

      });


  }

  hubspotRequest(data) {

    const formData = new FormData()
    for (var key in data) {
      formData.append(key, data[key]);
    }

    cy.request({
      method: 'POST',
      url: this.submitUrl,

      body: formData,
    }).then((apiResponse) => {
      try {
        expect(apiResponse.status).to.equal(200)
      }
      catch (err) {
        console.log(err)
      }


    });

  }

  demoEmailRequest(data) {
    const formData = new FormData()
    console.log('dataaaa', data, this.demoEmailRequestUrl)
    for (var key in data) {
      formData.append(key, data[key]);
    }

    cy.request({
      method: 'POST',
      url: this.demoEmailRequestUrl,

      body: formData,
    }).then((apiResponse) => {
      try {
        expect(apiResponse.status).to.equal(200)
      }
      catch (err) {
        console.log(err)
      }


    });
  }

  submitRequestviaApi() {

    let dataForRequest1 = {
      firstName: '',
      lastName: '',
      businessName: '',
      email: ''
    }
    let dataForRequest2 = {
      name: '',
      email: ''
    }

    cy.get(this.firstName)
      .invoke('val')
      .then((text) => {
        dataForRequest1.firstName = text
        dataForRequest2.name = text
      })

    cy.get(this.lastName)
      .invoke('val')
      .then((text) => {
        dataForRequest1.lastName = text

      })
    cy.get(this.businessName)
      .invoke('val')
      .then((text) => {
        dataForRequest1.businessName = text

      })

    cy.get(this.email)
      .invoke('val')
      .then((text) => {
        dataForRequest1.email = text
        dataForRequest2.email = text
      }).then(() => {
        this.hubspotRequest(dataForRequest1)
        this.demoEmailRequest(dataForRequest2)
      });






  }
}
export default TestCase1


