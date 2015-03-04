ReactionCore.Collections.MembershipTypes = MembershipTypes = this.MembershipTypes = new Mongo.Collection("membershipTypes");

ReactionCore.Collections.MembershipTypes.attachSchema(new SimpleSchema({
	membershipTypeLabel: {
		type: String,
		label: "Membership Type Name"
	},
	membershipCost: {
		type: Number,
		label: "Membership Cost"
	}
}));
ReactionCore.Collections.MembershipTypes.allow({
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	}
})
