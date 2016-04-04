import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Deals} from '/lib/collections';

var Schemas = {};

// Create basic deal Schema and some default values
// Need to add better types for error catching
Schemas.Deal = new SimpleSchema({
    sealId: {
        type: String,
        optional: true
    },
    dealName: {
        type: String,
        optional: true
    },
    pic: {
        type: String,
        optional: true
    },
    price: {
        type: String,
        optional: true
    },
    desc: {
        type: String,
        optional: true
    },
    type: {
        type: String,
        optional: true
    },
    timeLimit: {
        type: String,
        optional: true
    },
    dealPassword: {
        type: String,
        optional: true
    },
    points: {
        type: Number,
        optional: true,
        defaultValue: 1
    },
    dealsClaimed: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    latitude: {
        type: String,
        optional: true
    },
    longitude: {
        type: String,
        optional: true
    },
    formatted_address: {
        type: String,
        optional: true
    }
});

Deals.attachSchema(Schemas.Deal);