export function updateUser(userId, newProps) {
  return dispatch =>
    fetch(`http://localhost:8000/api/v1/users/${userId}`,
      {
        method: 'PUT',
        body: JSON.stringify(newProps)
      }
    )
      .then(response => response.json())
      .then(json => {
        // TODO: normalizr
        dispatch(receiveUser(json));
      })
      .catch(err => { throw err; });
}

export const RECEIVE_USER = 'RECEIVE_USER';
export function receiveUser(entities) {
  return {
    type: RECEIVE_USER,
    entities
  };
}