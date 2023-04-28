import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/92190494?v=4',
      name: 'Rodrigo Bonatti',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Heyy guyss 👋'
      },
      {
        type: 'paragraph',
        content: "My name is Rodrigo and I'm a web developer"
      },
      {
        type: 'link',
        content: 'https://github.com/bonattii'
      }
    ],
    publishedAt: new Date('2023-04-24 8:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/37058899?v=4',
      name: 'Lucas Boz',
      role: 'Mobile Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Heyy guyss 👋'
      },
      {
        type: 'paragraph',
        content: "My name is Lucas and I'm a mobile developer"
      },
      {
        type: 'link',
        content: 'https://github.com/bozlucas'
      }
    ],
    publishedAt: new Date('2022-05-13 8:00:00')
  }
];

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
};
