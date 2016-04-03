import {SimpleSchema} from 'meteor/aldeed:simple-schema';

var Schemas = {};

// Values to help manage the state
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

Schemas.Stats = new SimpleSchema({
    points: {
        type: String,
        optional: true,
        autoValue() {
            return '0';
        }
    },
    deals: {
        type: String,
        optional: true,
        autoValue() {
            return '0';
        }
    },
    moneySaved: {
        type: String,
        optional: true,
        autoValue() {
            return '0';
        }
    }
});

// Location schema from our geolocation/geocode
Schemas.Location = new SimpleSchema({
    formatted_address: {
        type: String,
        optional: true
    },
    address: {
        type: String,
        optional: true
    },
    city: {
        type: String,
        optional: true,
    },
    state: {
        type: String,
        optional: true,
    },
    zip: {
        type: String,
        optional: true,
    },
    country: {
        type: String,
        optional: true,
    },
    latitude: {
        type: String,
        optional: true
    },
    longitude: {
        type: String,
        optional: true
    }
});

// Detailed info for both the user and seal
// Need to add a custom require field to make
// Sure the seal and user have separate schemas
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
    businessName: {
        type: String,
        optional: true
    },
    location: {
        type: String,
        optional: true
    },
    type: {
        type: [String],
        optional: true
    },
    interests: {
    	type: [String],
    	optional: true
    },
    points: {
    	type: String,
    	optional: true
    },
    location: {
        type: Schemas.Location,
        optional: true
    },
    profileState: {
        type: Schemas.ProfileState,
        optional: true
    },
    stats: {
        type: Schemas.Stats,
        optional: true
    }
});

// Basic user field with profile attatched
Schemas.User = new SimpleSchema({
    username: {
        type: String,
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