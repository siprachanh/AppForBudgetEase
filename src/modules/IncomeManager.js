const remoteURL = "http://localhost:8088"

export const getIncomeById = (incomeId) => {
    return fetch (`$remoteURL}/income/${incomeId}`)
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
    }).then((response) => response.json());
  };


export const deleteIncome = (incomeId) => {
    return fetch(`${remoteURL}/income/${incomeId}`, {
        method: "DELETE" 
        }).then(result => result.json())    
}

export const updateIncome = (incomeId, editedIncome) => {
    return fetch(`${remoteURL}/income/${editedIncome.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedIncome),
    }).then((data) => data.json());
  };
  