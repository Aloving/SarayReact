import render from './render';
/** @jsx createElement */
import createElement from './createElement';

const stories = [
  { name: 'Didact introduction', url: 'http://bit.ly/2pX7HNn' },
  { name: 'Rendering DOM elements ', url: 'http://bit.ly/2qCOejH' },
  { name: 'Element creation and JSX', url: 'http://bit.ly/2qGbw8S' },
  { name: 'Instances and reconciliation', url: 'http://bit.ly/2q4A746' },
  { name: 'Components and state', url: 'http://bit.ly/2rE16nh' },
];

const appElement = (
  <div>
    <ul>
      {
        stories.map(({ name, url }) => (
          <li>
            <button>{Math.ceil(Math.random() * 100)}❤️</button>
            <a
              href={url}
              onClick={(e) => {
                e.preventDefault();

                console.log('here');
              }}
            >
              {name}
            </a>
          </li>
        ))
      }
    </ul>
  </div>
);

render(appElement, document.getElementById('root'));
