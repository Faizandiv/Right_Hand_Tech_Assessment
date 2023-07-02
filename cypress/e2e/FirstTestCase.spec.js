/// <reference types = "cypress" />
import TestCase1 from "../support/testCase1";

describe('Demo Request', () => {
  it('Submits Demo Request Form and Fetches API', () => {
    const formFill = new TestCase1();
    formFill.visitPage();
    formFill.fillDemoRequestForm();
    formFill.submitRequestviaApi();
    
    

  });





});

