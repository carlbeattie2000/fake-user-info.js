const { equal, match } = require("assert");
const test = require("node:test");

const impostor = require("../../src/impostor");

const impostorInstance = new impostor({ countryCode: "en_GB" });

test("finance banking tests", async (t) => {

  await t.test("Banking bank should return a string", () => {
    const bank = impostorInstance.finance.banking.bank();

    equal(typeof(bank), typeof(""))
  })

  await t.test("Banking card should return a int", () => {
    const card = impostorInstance.finance.banking.card();

    equal(typeof(card), typeof(0))
  })

  await t.test("Banking cvv should return a string", () => {
    const cvv = impostorInstance.finance.banking.cvv();

    equal(typeof(cvv), typeof(""));
  })

  await t.test("Banking expiry date should return a string that matches for format MM/YY", () => {
    const expiryDate = impostorInstance.finance.banking.expiryDate();

    equal(typeof(expiryDate), typeof(""));
    match(expiryDate, /\d\d\/\d\d/gm)
  })

  await t.test("Banking sortCode should return a string", () => {
    const sortCode = impostorInstance.finance.banking.sortCode();

    equal(typeof(sortCode), typeof(""));
  })

  await t.test("Banking account number should return a string", () => {
    const accountNumber = impostorInstance.finance.banking.accountNumber();

    equal(typeof(accountNumber), typeof(""));
  })

  await t.test("Banking balance should equal a float, and be not greater than the max passed. Should also return a string if bool is passed", () => {
    const floatBalance = impostorInstance.finance.banking.balance({ max: 5000 });
    const stringBalance = impostorInstance.finance.banking.balance({ formattedString: true });

    equal(typeof(floatBalance), typeof(.5));
    equal(floatBalance < 5000, true);

    equal(typeof(stringBalance), typeof(""));
  })

})

test("finance transaction tests", async (t) => {

  await t.test("transactionString should return a string", () => {
    
  })

  await t.test("transactionObject should return a object", () => {

  })

  await t.test("transferString should return a string", () => {

  })

  await t.test("transferObject should return a string", () => {

  })

  await t.test("statementString should return an array of strings", () => {

  })

  await t.test("statementObject should return an array of objects", () => {

  })

})