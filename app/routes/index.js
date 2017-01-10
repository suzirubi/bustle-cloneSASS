import Ember from 'ember';

export default Ember.Route.extend({
});

module.exports = {
  name: "sass",
  included: function(/* app */) {
    this._super.included.apply(this, arguments);
  }
};

// If you omit this step, it will throw the following error:
//
// Cannot read property 'sassOptions' of undefined
// TypeError: Cannot read property 'sassOptions' of undefined
// at Class.module.exports.sassOptions (~/my-plugin/node_modules/ember-cli-sass/index.js:43:48)
// Make sure your dummy app contains an app.scss
//
// If you run ember build dist, your styles from addon/styles/addon.scss should appear correctly in dist/assets/vendor.css
//
// Alternative Addon Usage
//
// As an alternative to the above, some addons may choose to allow their SASS to be used in the parent app, rather than the compiled CSS. This has the advantage of easily allowing users to use and override your SASS. The steps for this setup are as follows:
//
// Instead of including your styles in addon/styles/addon.scss, place them in app/styles/your-addon-name.scss. Document that your user can now add @import 'your-addon-name'; to their app.scss file. In the lines before this import they can choose to override any variables your addon marks with default.
// Ensure steps 2, 3 and 4 are completed as per the standard addon usage section above.
