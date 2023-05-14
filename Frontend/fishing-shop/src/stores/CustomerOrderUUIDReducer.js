const ADD_UUID = "ADD_UUID";
const REMOVE_UUID = "REMOVE_UUID";

export function saveUUID(uuid) {
  return { type: ADD_UUID, uuid };
}

export function removeUUID() {
  return { type: REMOVE_UUID };
}

const initialState = { uuid: "" };

export default function uuidReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_UUID:
      return (state = action.uuid);
    case REMOVE_UUID:
      return (state = "");
    default:
      return state;
  }
}
