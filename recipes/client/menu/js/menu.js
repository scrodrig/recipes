/**
 * Created by SchubertDavidRodriguez on 10/20/16.
 */
Template.Menu.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('recipes');
    });
});

Template.Menu.helpers({
    recipes: () => {
        return Recipes.find({inMenu: true});
    }
});