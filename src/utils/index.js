export function createReducer (initialState, fnMap) {
  return (state = initialState, {
    type = null, payload = null
  }) => {
    const handler = fnMap[type];
    return handler ? handler(state, payload) : state;
  };
}