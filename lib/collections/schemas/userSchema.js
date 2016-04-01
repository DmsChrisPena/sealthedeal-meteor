import {SimpleSchema} from 'meteor/aldeed:simple-schema';

var Schemas = {};

// // Booleans to help manage the state
Schemas.ProfileState = new SimpleSchema({
	isUnderAge: {
		type: Boolean,
		optional: true,
        autoValue() {
            return false;
        }
	},
	isValidBusiness: {
		type: Boolean,
		optional: true,
        autoValue() {
            return false;
        }
	}
});

// // Detailed info for both the user and seal
// // Need to add a custom require field to make
// // Sure the seal and user have separate schemas
Schemas.UserProfile = new SimpleSchema({
    name: {
        type: String,
        optional: true
    },
    role: {
        type: String,
        optional: true
    },
    age: {
        type: String,
        optional: true
    },
    sex : {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    business: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    location: {
        type: String,
        optional: true
    },
    type: {
        type: [String],
        optional: true,
        min: 1
    },
    interests: {
    	type: [String],
    	optional: true,
    	min: 1
    },
    points: {
    	type: String,
    	optional: true
    },
    profileState: {
        type: Schemas.ProfileState,
        optional: true
    }
});

// Basic user field with profile attatched
Schemas.User = new SimpleSchema({
    username: {
        type: String,
        min: 8,
        optional: true
    },
    emails: {
        type: Array,
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    roles: {
        type: [String],
        optional: true
    },
    profile: {
        type: Schemas.UserProfile,
        optional: true
    },
    heartbeat: {
        type: Date,
        optional: true
    }
});

Meteor.users.attachSchema(Schemas.User);