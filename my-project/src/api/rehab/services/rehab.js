'use strict';

/**
 * rehab service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rehab.rehab');
