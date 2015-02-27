MembershipSchemaPart = new SimpleSchema({
	memberType: {
		label: "I want to register as",
		type: String,
		autoform: {
			options: [
				{label: "Family / Supporter", value: "familySupporter"},
				{label: "Business", value: "business"},
				{label: "Family / Staff", value: "familyStaff"}
			]
		}
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
MembershipSchema = new SimpleSchema([MembershipSchemaPart, ReactionCore.Schemas.Product]);