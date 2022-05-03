const remoteURL = "http://localhost:8088"

export const getIncomeById = (incomeId) => {
    return fetch (`${remoteURL}/income/${incomeId}`)
    .then(res => res.json())
}

export const getAllIncome = () => {
    return fetch(`${remoteURL}/income`)
    .then(res => res.json())
}
export const addIncome = (newIncome) => {
    return fetch(`${remoteURL}/income`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIncome),
    }).then(response => response.json());
  };


export const deleteIncome = id => {
    return fetch(`${remoteURL}/income/${id}`, {
        method: "DELETE",
        }).then(result => result.json())    
}

export const updateIncome = (editedIncome) => {
    return fetch(`${remoteURL}/income/${editedIncome.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedIncome),
    }).then(data => data.json());
  }
  // add, post, patch to edit, delete the income obj to db
  // promise.all() will give it an array of promise obj; follow it with a single.then
  // that .then will not call its callback fn until all promises have resolved