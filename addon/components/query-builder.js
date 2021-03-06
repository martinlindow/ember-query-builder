import Ember from 'ember';

const {
  run,
  isNone
} = Ember;

export default Ember.Component.extend({
  classNames: ['query-builder'],

  didReceiveAttrs() {
    this._super(...arguments);
    this.scheduleSetupQueryBuilder();
  },

  willDestroyElement() {
    this._super(...arguments);
    run.cancel(this._setupTimer);
    this._destroyQueryBuilder();
  },

  scheduleSetupQueryBuilder() {
    run.cancel(this._setupTimer);
    this._setupTimer = run.scheduleOnce('afterRender', this, this.setupQueryBuilder);
  },

  setupQueryBuilder() {
    this._destroyQueryBuilder();
    this.$().queryBuilder(this._buildOptions());
    this.sendAction('onChange', this._getQueryBuilder());
  },

  _buildOptions() {
    return Object.keys(this.attrs).reduce((obj, key) => {
      obj[key] = this.get(key);
      return obj;
    }, {});
  },

  _getQueryBuilder() {
    return this.$()[0].queryBuilder;
  },

  _destroyQueryBuilder() {
    const queryBuilder = this._getQueryBuilder();
    if(!isNone(queryBuilder)) {
      queryBuilder.destroy();
    }
  }
});
