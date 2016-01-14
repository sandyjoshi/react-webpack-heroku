export default {
  closeDialog() {
    return {
      type: 'CLOSE_DIALOG'
    };
  },
  deleteConfirmed() {
    return {
      type: 'DELET_CONFIRMAED'
    };
  },
  showDialog(index) {
    return {
      type: 'SHOW_DIALOG',
      payload: index
    };
  },
  closeAddDialog() {
    return {
      type: 'CLOSE_ADD_DIALOG'
    };
  },
  // deleteConfirmed() {
  //   return {
  //     type: 'DELET_CONFIRMAED'
  //   };
  // },
  showAddDialog(index) {
    return {
      type: 'SHOW_ADD_DIALOG',
      payload: index
    };
  },

  AddUpdateContact(payload) {
    return {
      type: 'ADD_UPDATE_CONTACT',
      payload: payload
    };
  },

  // addContact (dispatch, props) {
  //   dispatch({
  //     type: filterConstants.DECODE_FILTER,
  //     payload: props.f
  //   });
  //   return Promise.resolve();
  // },
  // editContact () {
  //   return {
  //     type: filterConstants.FILTER_REFLECTED
  //   };
  // }
};