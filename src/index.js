import render from './render';

const stories = [
  { name: 'Didact introduction', url: 'http://bit.ly/2pX7HNn' },
  { name: 'Rendering DOM elements ', url: 'http://bit.ly/2qCOejH' },
  { name: 'Element creation and JSX', url: 'http://bit.ly/2qGbw8S' },
  { name: 'Instances and reconciliation', url: 'http://bit.ly/2q4A746' },
  { name: 'Components and state', url: 'http://bit.ly/2rE16nh' },
];

function storyElement({ name, url }) {
  const likes = Math.ceil(Math.random() * 100);
  const buttonElement = {
    type: 'button',
    props: {
      children: [
        { type: 'TEXT ELEMENT', props: { nodeValue: likes } },
        { type: 'TEXT ELEMENT', props: { nodeValue: '❤️' } },
      ],
    },
  };
  const linkElement = {
    type: 'a',
    props: {
      href: url,
      onClick: (e) => {
        e.preventDefault();

        console.log('here');
      },
      children: [{ type: 'TEXT ELEMENT', props: { nodeValue: name } }],
    },
  };

  return {
    type: 'li',
    props: {
      children: [buttonElement, linkElement],
    },
  };
}

const appElement = {
  type: 'div',
  props: {
    children: [
      {
        type: 'ul',
        props: {
          children: stories.map(storyElement),
        },
      },
    ],
  },
};

render(appElement, document.getElementById('root'));
