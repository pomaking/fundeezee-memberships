MembershipTypes = new Mongo.Collection("membershipType");

MembershipTypeSchema = new SimpleSchema({
	membershipType: {
		type: String
	},
	membershipCost: {
		type: Number,
		label: "Membership Cost"
	}
});