ReactionCore.registerPackage
  name: 'fundeezee-memberships' # usually same as meteor package
  autoEnable: false # auto-enable in dashboard
  settings: # private package settings config (blackbox)
    some_secret: "xxxx"
  registry: [
    # all options except route and template
    # are used to describe the
    # dashboard 'app card'.
    {
      provides: 'dashboard'
      label: 'Memberships'
      description: "Memberships"
      icon: 'fa fa-globe' # glyphicon/fa
      cycle: '2' # Core, Stable, Testing (currently testing)
      container: 'dashboard'  #group this with settings
    }
    # configures settings link for app card
    # use 'group' to link to dashboard card
    {
      route: 'membershipsSettings'
      provides: 'settings'
      container: 'dashboard'
    }
    {
      route: 'memberships'
      label: 'Memberships'
      provides: 'shortcut'
      icon: 'fa fa-plus'
    }
    {
      route: 'createMembershipType'
      label: 'Create Membership Type'
      icon: 'fa fa-plus'
      provides: 'shortcut'
    }
  ]
  # array of permission objects
  permissions: [
    {
      label: "Memberships"
      permission: "ReactionCore.Collections.MembershipTypes"
      group: "Shop Settings"
    }
  ]
