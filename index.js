
export default function (kibana) {
  return new kibana.Plugin({
    // Tell Kibana that this plugin needs canvas and the Kibana interpreter
    require: ['interpreter', 'canvas'],

    // The name of your plugin. Make this whatever you want.
    name: 'canvas_iframe',

    uiExports: {
      // Tell Kibana that the files in `/public` should be loaded into the
      // browser only when the user is in the Canvas app.
      canvas: ['plugins/canvas_iframe']
    },

    // Enable the plugin by default
    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
  });
}