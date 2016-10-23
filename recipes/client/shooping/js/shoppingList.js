/**
 * Created by SchubertDavidRodriguez on 10/20/16.
 */
Template.ShoppingList.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('recipes');
    });
});

Template.ShoppingList.helpers({
    shoppingList: () => {
        return Recipes.find({inMenu: true});
    }
});