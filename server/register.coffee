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
      label: 'HelloWorld'
      description: "HelloWorld Example"
      icon: 'fa fa-globe' # glyphicon/fa
      cycle: '2' # Core, Stable, Testing (currently testing)
      container: 'dashboard'  #group this with settings
    }
    # configures settings link for app card
    # use 'group' to link to dashboard card
    {
      route: 'helloworld'
      provides: 'settings'
      container: 'dashboard'
    }
  ]
  # array of permission objects
  permissions: [
    {
      label: "HelloWorld"
      permission: "HelloWorld"
      group: "Shop Settings"
    }
  ]
