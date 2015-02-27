FamilyMembershipSchemaPart = new SimpleSchema({
	membershipType: {
		label: "Membership Type",
		type: String
	},
	householdDetails: {
		label: "Household Details",
		type: Object
	},
	"householdDetails.mailingAddress" : {
		label: "Mailing Address",
		type: String
	},
	"householdDetails.city" : {
		label: "City",
		type: String
	},
	"householdDetails.state" : {
		label: "State",
		type: String
	},
	"householdDetails.zip" : {
		label: "Zip",
		type: Number
	},
	"householdDetails.children" : {
		label: "Children",
		type: [String],
		optional: true
	},
	"householdDetails.parents" : {
		label: "Parents",
		type: [String],
		optional: true
	}
});
FamilyMembershipSchema = new SimpleSchema([FamilyMembershipSchemaPart, ReactionCore.Schemas.Product]);
