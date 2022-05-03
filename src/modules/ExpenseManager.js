const remoteURL = "http://localhost:8088"

export const getExpenseById = (expenseId) => {
  return fetch(`${remoteURL}/expense/${expenseId}`)
  .then(res => res.json())
}

export const getAllExpense = () => {
  return fetch(`${remoteURL}/expense`)
  .then(res => res.json())
}

export const deleteExpense = id => {
  return fetch(`${remoteURL}/expense/${id}`, {
    method: "DELETE",
  }).then(result => result.json())
}
export const addExpense = newExpense => {
  return fetch(`${remoteURL}/expense`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newExpense)
  }).then(response => response.json())
}
export const updateExpense  = (editedExpense) => {
	return fetch(`${remoteURL}/expense/${editedExpense.id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(editedExpense)
	}).then(data => data.json());
}
//add, post, patch to edit, the expense obj to db
//promise.all(): give it an array of promise obj; follow it wi a single .then()
//that .then will not call its callback fn until ALL promises have resolved