import Ember from 'ember';

const {Controller, inject} = Ember;

export default Controller.extend({
    session: inject.service('session'),

    actions: {
        invalidateSession() {
            this.get('session').invalidate();
        }
    }
});
