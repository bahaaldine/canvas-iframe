import ReactDOM from 'react-dom';
import React from 'react';

// Elements show up in the Canvas elements menu and can be visually added to a canvas
const elements = [
  () => ({
    name: 'canvasIframe',
    displayName: 'Canvas iframe',
    help: 'Embed an iframe in a Canvas workpad',
    image: 'data:image/png;base64,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',
    expression: 'canvasIframe url="https://fr.wikipedia.org/wiki/Main_Page" width="640" height="480"',
  }),
];

// Browser functions are Canvas functions which run in the browser, and can be used in
const browserFunctions = [
  () => ({
    name: 'canvasIframe',
    help: 'Embed an iframe in a Canvas workpad',
    args: {
    name: {
        types: ['string'],
        default: 'myIframe',
    },
    url: {
        types: ['string'],
        default: 'https://fr.wikipedia.org/wiki/Main_Page',
    },
    width: {
        types: ['number'],
        default: 640,
    },
    height: {
        types: ['number'],
        default: 480,
    },
    },
    fn: (context, args) => {
      return {
        type: 'render',
        as: 'canvasIframe',
        value: {
          name: args.name,
          url: args.url,
          width: args.width,
          height: args.height,
        },
      };
    },
  }),
];

const renderers = [
  () => ({
    name: 'canvasIframe',
    displayName: 'Canvas iframe',
    help: 'Embed an iframe in a Canvas workpad',
    reuseDomNode: true,
    render(domNode, config, handlers) {
      const random = (
        <iframe id={config.name} src={config.url} width={config.width} height={config.height}></iframe>
      )

      ReactDOM.render(random, domNode, () => {
        handlers.done();
      });

      handlers.onDestroy(() => {
        ReactDOM.unmountComponentAtNode(domNode);
      });

      handlers.onResize(() => {
        $('#'+ config.name).css('width', domNode.clientWidth);
        $('#'+ config.name).css('height', domNode.clientHeight);
      });

      return handlers.done();

    }
  }),
]

// Register our elements and browserFunctions with the Canvas interpreter.
kbnInterpreter.register({
  elements,
  browserFunctions,
  renderers,
});