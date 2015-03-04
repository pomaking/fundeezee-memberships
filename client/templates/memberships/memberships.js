Template.memberships.helpers({
	membershipTypes: function(){
		return MembershipTypes.find({}).fetch();
	}
})