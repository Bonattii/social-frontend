import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export const Comment: React.FC<CommentProps> = ({
  content,
  onDeleteComment
}) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeCount = () => {
    setLikeCount(prev => prev + 1);
  };

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/92190494?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rodrigo Bonatti</strong>
              <time title="May 11th at 8:13am" dateTime="2023-05-11 08:13:30">
                About 1h ago
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Applaud <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
