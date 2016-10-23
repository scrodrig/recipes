/**
 * Created by SchubertDavidRodriguez on 10/23/16.
 */
Template.NewRecipe.events({
    'click .fa-close': function () {
        Session.set('newRecipe', false);
    }
});