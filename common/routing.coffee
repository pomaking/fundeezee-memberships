Router.map ->
  @route 'memberships',
    controller: ShopAdminController
    path: 'dashboard/settings/memberships',
    template: 'memberships'
    waitOn: ->
      return ReactionCore.Subscriptions.Packages
