'use strict';

/**
 * ascensor service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ascensor.ascensor');
