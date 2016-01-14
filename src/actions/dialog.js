export default {
  closeDeleteDialog() {
    return {
      type: 'CLOSE_DELETE_DIALOG'
    };
  },
  deleteConfirmed() {
    return {
      type: 'DELETE_CONFIRMED'
    };
  },
  showDeleteDialog(index) {
    return {
      type: 'SHOW_DELETE_DIALOG',
      payload: index
    };
  },

  closeAddDialog() {
    return {
      type: 'CLOSE_ADD_DIALOG'
    };
  },

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
};