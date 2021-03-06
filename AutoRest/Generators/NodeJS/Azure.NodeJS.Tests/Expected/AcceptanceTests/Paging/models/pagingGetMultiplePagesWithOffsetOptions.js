/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PagingGetMultiplePagesWithOffsetOptions class.
 * @constructor
 * Additional parameters for the Paging_getMultiplePagesWithOffset operation.
 * @member {number} [maxresults] Sets the maximum number of items to return in
 * the response.
 * 
 * @member {number} offset Offset of return value
 * 
 * @member {number} [timeout] Sets the maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * 
 */
function PagingGetMultiplePagesWithOffsetOptions() {
}

/**
 * Defines the metadata of PagingGetMultiplePagesWithOffsetOptions
 *
 * @returns {object} metadata of PagingGetMultiplePagesWithOffsetOptions
 *
 */
PagingGetMultiplePagesWithOffsetOptions.prototype.mapper = function () {
  return {
    required: false,
    type: {
      name: 'Composite',
      className: 'PagingGetMultiplePagesWithOffsetOptions',
      modelProperties: {
        maxresults: {
          required: false,
          type: {
            name: 'Number'
          }
        },
        offset: {
          required: true,
          type: {
            name: 'Number'
          }
        },
        timeout: {
          required: false,
          defaultValue: 30,
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = PagingGetMultiplePagesWithOffsetOptions;
