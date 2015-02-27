Meteor.startup(function () {
	if(!MembershipTypes.findOne({label: "Individual"})){
		addDefaultMembershipTypes();		
	}
});

function addDefaultMembershipTypes(){
	var ind = MembershipTypes.insert({
		label: "Individual Membership",
		value: "individual",
		cost: 10.00
	});
	var fam = MembershipTypes.insert({
		label: "Family Membership",
		value: "family",
		cost: 15.00
	});
	var bus = MembershipTypes.insert({
		label: "Business Membership",
		value: "business",
		cost: 12.00
	});
	Products.insert({
    _id: Random.id(),
    title: "Individual Membership",
    price: 10.00,
  	, validate: false
  });
  Products.insert({
    _id: Random.id(),
    title: "Family Membership",
    price: 10.00,
  	, validate: false
  });
  Products.insert({
    _id: Random.id(),
    title: "Business Membership",
    price: 10.00,
  	, validate: false
  });
}