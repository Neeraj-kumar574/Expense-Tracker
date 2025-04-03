export default class ExpenseManager {
    #expenses = []; 
  
    addExpense(name, amount) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const id = this.#expenses.length ? this.#expenses[this.#expenses.length - 1].id + 1 : 1;
          const expense = { id, name, amount };
          this.#expenses = [...this.#expenses, expense]; 
          console.log(`Expense Added: ${id} ${name} ($${amount})`);
          resolve(expense);
        }, 1000);
      });
    }
  
    deleteExpense(id) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.#expenses = this.#expenses.filter(expense => expense.id !== id);
          console.log(`Expense ${id} Deleted.`);
          resolve();
        }, 1000);
      });
    }
  
    getExpenses() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([...this.#expenses]);
        }, 1000);
      });
    }
  }
  