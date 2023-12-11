'use strict';

/**
 * our-vision service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-vision.our-vision');
