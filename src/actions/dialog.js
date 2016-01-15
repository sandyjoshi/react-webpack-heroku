import dialogConstants from '../constants/dialog';

export default {
  closeDeleteDialog() {
    return {
      type: dialogConstants.CLOSE_DELETE_DIALOG
    };
  },
  deleteConfirmed() {
    return {
      type: dialogConstants.DELETE_CONFIRMED
    };
  },
  showDeleteDialog(index) {
    return {
      type: dialogConstants.SHOW_DELETE_DIALOG,
      payload: index
    };
  },

  closeAddDialog() {
    return {
      type: dialogConstants.CLOSE_ADD_DIALOG
    };
  },

  showAddDialog(index) {
    return {
      type: dialogConstants.SHOW_ADD_DIALOG,
      payload: index
    };
  },

  AddUpdateContact(payload) {
    return {
      type: dialogConstants.ADD_UPDATE_CONTACT,
      payload: payload
    };
  },
};