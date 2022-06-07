
const initialState = {}
const defaultAction = {}

const baseReducer = (state=initialState, action=defaultAction) => {
  switch (action.type) {
  default:
    return {
      ...state
    }
  }
}

export default baseReducer