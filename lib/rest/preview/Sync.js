'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var ServiceList = require('./sync/service').ServiceList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the Sync version of Preview
 *
 * @property {Twilio.Preview.Sync.ServiceList} services - services resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
function Sync(domain) {
  Version.prototype.constructor.call(this, domain, 'Sync');

  // Resources
  this._services = undefined;
}

_.extend(Sync.prototype, Version.prototype);
Sync.prototype.constructor = Sync;

Object.defineProperty(Sync.prototype,
  'services', {
  get: function() {
    this._services = this._services || new ServiceList(this);
    return this._services;
  }
});

module.exports = Sync;
