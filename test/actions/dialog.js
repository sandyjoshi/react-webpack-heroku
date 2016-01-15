// import 'babel-core/polyfill';
import { expect } from 'chai';
// import expect from 'expect'
import * as actions from '../../src/actions/dialog'
import * as types from '../../src/constants/dialog'

describe('Delete contact dialog actions', () => {
  it('should create an action to close delete dialog', () => {
    const expectedAction = {
      type: types.CLOSE_DELETE_DIALOG,
    }
    expect(actions.closeDeleteDialog()).to.eql(expectedAction)
  })

  it('should create an action to confirm deletion of contact', () => {
    const expectedAction = {
      type: types.DELETE_CONFIRMED,
    }
    expect(actions.deleteConfirmed()).to.eql(expectedAction)
  })

  it('should create an action to show delete dialog', () => {
  	const contactId = 1;
    const expectedAction = {
      type: types.SHOW_DELETE_DIALOG,
      payload: contactId
    }
    expect(actions.showDeleteDialog(contactId)).to.eql(expectedAction)
  })
})

describe('Add contact dialog actions', () => {
  it('should create an action to close add contact dialog', () => {
    const expectedAction = {
      type: types.CLOSE_ADD_DIALOG,
    }
    expect(actions.closeAddDialog()).to.eql(expectedAction)
  })

  it('should create an action to show add contact dialog', () => {
  	const contactId = 1;
    const expectedAction = {
      type: types.SHOW_ADD_DIALOG,
      payload: contactId
    }
    expect(actions.showAddDialog(contactId)).to.eql(expectedAction)
  })

  it('should create an action to update contact dialog', () => {
  	const contactData = { id : 5 , name : 'abc' };
    const expectedAction = {
      type: types.ADD_UPDATE_CONTACT,
      payload: contactData
    }
    expect(actions.AddUpdateContact(contactData)).to.eql(expectedAction)
  })
})