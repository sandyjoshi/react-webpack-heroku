import { expect, assert } from 'chai';
import reducer from '../../src/reducers/dialog'
import * as types from '../../src/constants/dialog'

describe('Dialog reducer', () => {
  it('should return the initial state', () => {
    let state = reducer(undefined, {});
    assert.isObject(state);
    expect( state.deleteDialog ).to.eql( false );
    expect( state.addDialog ).to.eql( false );
    expect( state.deletingContactId ).to.be.null;
    expect( state.editingContact ).to.be.null;
    assert.isArray( state.contacts );
  })

  describe('Delete contact dialog reducer', () => {

    it('should handle CLOSE_DELETE_DIALOG', () => {
      let state = reducer({}, { type: types.CLOSE_DELETE_DIALOG });
      assert.isObject(state);
      expect( state.deleteDialog ).to.eql( false );
      assert.isNull( state.deletingContactId );
    })

    it('should handle SHOW_DELETE_DIALOG', () => {
      const contactId = 1 ;
      let state = reducer({}, { type: types.SHOW_DELETE_DIALOG , payload : contactId });
      assert.isObject(state);
      expect( state.deleteDialog ).to.eql( true );
      expect( state.deletingContactId ).to.eql( contactId );
    })

    it('should handle DELETE_CONFIRMED', () => {
      const contactId = 1 ;
      let state = reducer({ deletingContactId : contactId , contacts : [ { id : contactId } ] }, { type: types.DELETE_CONFIRMED });
      assert.isObject(state);
      expect( state.deleteDialog ).to.eql( false );
      assert.isArray( state.contacts );
      expect( state.contacts.length ).to.eql( 0 );
    })
  })

  describe('Add/Update contact dialog reducer', () => {

    it('should handle SHOW_ADD_DIALOG for adding contact', () => {
      let state = reducer({ contacts : [] }, { type: types.SHOW_ADD_DIALOG });
      assert.isObject(state);
      expect( state.addDialog ).to.eql( true );
      expect( state.editingContact ).to.be.undefined;
    })

    it('should handle SHOW_ADD_DIALOG for updating contact', () => {
      const contactId = 1 ;
      let state = reducer({ contacts : [ { id : contactId } ] }, { type: types.SHOW_ADD_DIALOG , payload : contactId });
      assert.isObject(state);
      expect( state.addDialog ).to.eql( true );
      expect( state.editingContact.id ).to.eql( contactId );
    })

    it('should handle CLOSE_ADD_DIALOG', () => {
      let state = reducer({}, { type: types.CLOSE_ADD_DIALOG });
      assert.isObject(state);
      expect( state.addDialog ).to.eql( false );
      assert.isNull( state.editingContact );
    })

    it('should handle ADD_UPDATE_CONTACT for adding contact', () => {
      const contact = { name : 'abc' } ;
      let state = reducer({ contacts : [] }, { type: types.ADD_UPDATE_CONTACT , payload : contact });
      assert.isObject(state);
      assert.isArray( state.contacts );
      expect( state.contacts.length ).to.eql( 1 );
    })

    it('should handle ADD_UPDATE_CONTACT for updating contact', () => {
      const contact = { name : 'abc' , id : 2 } ;
      let state = reducer({ contacts : [ { name : 'xyz' , id : 2 } ] }, { type: types.ADD_UPDATE_CONTACT , payload : contact });
      assert.isObject(state);
      assert.isArray( state.contacts );
      expect( state.contacts.length ).to.eql( 1 );
      expect( state.contacts[0].name ).to.eql( 'abc' );
    })
  })

})