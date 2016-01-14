import { createReducer }     from '../utils';

const initialState = {
	deleteDialog: false,
	addDialog : false,
	deletingContactId : null,
	editingContactId : null,
    contacts:
    [
		{
			id: 1,
			name : 'Terrence S. Hatfield',
			tel: '651-603-1723',
			email: 'TerrenceSHatfield@rhyta.com'
		},
		{
			id: 2,
			name : 'Chris M. Manning',
			tel: '513-307-5859',
			email: 'ChrisMManning@dayrep.com'
		},
		{
			id: 3,
			name : 'Ricky M. Digiacomo',
			tel: '918-774-0199',
			email: 'RickyMDigiacomo@teleworm.us'
		},
		{
			id: 4,
			name : 'Michael K. Bayne',
			tel: '702-989-5145',
			email: 'MichaelKBayne@rhyta.com'
		},
		{
			id: 5,
			name : 'John I. Wilson',
			tel: '318-292-6700',
			email: 'JohnIWilson@dayrep.com'
		},
		{
			id: 6,
			name : 'Rodolfo P. Robinett',
			tel: '803-557-9815',
			email: 'RodolfoPRobinett@jourrapide.com'
		}
	]
};

export default createReducer(initialState, {
  ['EDIT_ITEM'] : (state, payload) => {
    return Object.assign({}, state, {
      list: payload.data.hits
    });
  },

  ['ADD_ITEM'] : (state, payload) => {
    return Object.assign({}, state, {
      list: list.push(payload)
    });
  },

  ['SHOW_DIALOG'] : (state, payload) => {
    return Object.assign({}, state, {
      deleteDialog: true,
      deletingContactId : payload
    });
  },

  ['CLOSE_DIALOG'] : (state, payload) => {
    return Object.assign({}, state, {
       deleteDialog: false,
       deletingContactId : null
    });
  },

  ['SHOW_ADD_DIALOG'] : (state, payload) => {
    let index = state.contacts.findIndex( (item) => payload == item.id );
    let editingContact = state.contacts[index];
    return Object.assign({}, state, {
      addDialog: true,
      editingContact : editingContact
    });
  },

  ['CLOSE_ADD_DIALOG'] : (state, payload) => {
    return Object.assign({}, state, {
       addDialog: false,
       editingContact : null
    });
  },

  ['ADD_UPDATE_CONTACT'] : (state, payload) => {
  	let updateId = payload.id;
  	let index = state.contacts.findIndex( (item) => updateId == item.id );
  	if( index > -1 ) {
	  	state.contacts[index] = payload ;
  	}
  	else {
  		// ToDo: change Generate ID method.
  		payload.id = state.contacts[ state.contacts.length - 1 ].id + 1;
	  	state.contacts.push(payload) ;
  	}
    return Object.assign({}, state, {
  		addDialog: false,
  		editingContact : null
    });
  },

  ['DELET_CONFIRMAED'] : (state, payload) => {
  	let deleteId = state.deletingContactId ;
  	let index = state.contacts.findIndex( (item) => deleteId == item.id );
  	state.contacts.splice( index , 1 );
    return Object.assign({}, state, {
    	deleteDialog: false,
    });
  }

});