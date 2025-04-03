import ExpenseManager from "./expenseManager.js"; 

const expenseManager = new ExpenseManager();

async function manageExpenses() {
  console.log("Fetching initial expenses...\n");

  await expenseManager.addExpense("Groceries", 50);
  await expenseManager.addExpense("Electricity Bill", 100);

  let expenses = await expenseManager.getExpenses();
  displayExpenses(expenses);

  await expenseManager.addExpense("Internet Bill", 75);
  await expenseManager.deleteExpense(2);

  expenses = await expenseManager.getExpenses();
  displayExpenses(expenses);
}

function displayExpenses(expenses) {
  console.log("\nCurrent Expenses:");
  expenses.forEach(({ id, name, amount }) => {
    console.log(`ID: ${id}, Name: ${name}, Amount: $${amount}`);
  });
  console.log("");
}

manageExpenses();
