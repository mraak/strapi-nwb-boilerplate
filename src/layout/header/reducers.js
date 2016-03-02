import { handleActions } from 'redux-actions';

export default handleActions({
  "header/toggleOpen": (state) => ({ opened: !state.opened })
}, { opened: false });
