import render from './render';
/** @jsx createElement */
import createElement from './createElement';

const random = () => Math.ceil(Math.random() * 100);

const stories = [
  { name: 'Didact introduction', url: 'http://bit.ly/2pX7HNn', likes: random() },
  { name: 'Rendering DOM elements ', url: 'http://bit.ly/2qCOejH', likes: random() },
  { name: 'Element creation and JSX', url: 'http://bit.ly/2qGbw8S', likes: random() },
  { name: 'Instances and reconciliation', url: 'http://bit.ly/2q4A746', likes: random() },
  { name: 'Components and state', url: 'http://bit.ly/2rE16nh', likes: random() },
];

const appElement = () => (
  <div>
    <ul>
      {
        stories.map((story) => (
          <li>
            <button>{story.likes}❤️</button>
            <a
              href={story.url}
              onClick={(e) => {
                e.preventDefault();

                story.likes += 1;
                render(appElement(), document.getElementById('root'));
              }}
            >
              {story.name}
            </a>
          </li>
        ))
      }
    </ul>
  </div>
);

render(appElement(), document.getElementById('root'));
