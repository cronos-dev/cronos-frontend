//Action to get all Repos
export function getRepos(response) {
  return{
    type: 'Get_Repos',
    payload: response
  }
}

export function getMenus(response) {
  console.log('getMenus', response)
  return{
    type: 'Get_Menus',
    payload: response
  }
}

// Thunk function, it calls the getRepos action above after it receives the fetch response.
export function getRepoThunk() {
  return function(dispatch, getState) {
    fetch('https://api.github.com/repositories')
    .then(e => e.json())
      .then(function(response){
        console.log(response);
        var arr = response.slice(0,10);
        dispatch(getRepos(arr))
      })
      .catch((error) => {
        console.error(error,"ERRRRRORRR");
      });
  }
}

export function getMenuThunk() {
  return function(dispatch, getState) {
    const { data } = getState()
    let url = 'http://crimson-voice-2981.getsandbox.com/item/' + data.restaurantId;
    fetch(
      url,
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      }
    )
    .then(e => e.json())
      .then(function(response){
        console.log('fetch resp', response);
        var arr = response.menus;
        dispatch(getMenus(arr))
      })
      .catch((error) => {
        console.error(error,"ERRRRRORRR");
      });
  }
}

// Repo selected action
export function repoSelected(repo){
  return{
    type: 'Repo_Selected',
    payload: repo
  }
}

export function restaurantScanned(restaurantInfo) {
  return {
    type: 'RESTAURANT_SCANNED',
    payload: restaurantInfo
  }
}

export function orderStart(orderInfo) {
  return {
    type: 'START_ORDER',
    payload: orderInfo
  }
}

export function addItemQuantity(addItemInfo) {
  return {
    type: 'ADD_ITEM_TO_ORDER',
    payload: addItemInfo
  }
}

export function removeItemQuantity(removeItemInfo) {
  return {
    type: 'REMOVE_ITEM_FROM_ORDER',
    payload: removeItemInfo
  }
}

