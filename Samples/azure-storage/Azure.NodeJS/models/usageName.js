/*
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the UsageName class.
 * @constructor
 * The Usage Names.
 * @member {string} [value] Gets a string describing the resource name.
 * 
 * @member {string} [localizedValue] Gets a localized string describing the
 * resource name.
 * 
 */
function UsageName() {
}

/**
 * Defines the metadata of UsageName
 *
 * @returns {object} metadata of UsageName
 *
 */
UsageName.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'UsageName',
    type: {
      name: 'Composite',
      className: 'UsageName',
      modelProperties: {
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'String'
          }
        },
        localizedValue: {
          required: false,
          serializedName: 'localizedValue',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = UsageName;
