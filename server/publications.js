Meteor.publish('membershipTypes', function(){
	console.log("woot");
	console.log(MembershipTypes.find({}).fetch());
  return ReactionCore.Collections.MembershipTypes.find({});
});