import { check } from 'meteor/check';

export default function ({Meteor, Collections}) {
	Meteor.methods({
		'user.create'(_id, username, password) {
			check(_id, String);
			check(title, String);
			check(content, String);

			const createdAt = new Date();
			const user = {
				_id,
				username,
				password
			};
			Collection.Users.insert(user);
		}
	});
}