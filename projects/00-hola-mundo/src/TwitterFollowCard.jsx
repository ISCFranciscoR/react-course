import { useState } from 'react'

export default function TwitterFollowCard({ children, userName = 'unknow', initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const followingText = isFollowing ? 'Siguiendo' : 'Seguir';
  const btnClassName = isFollowing ? 'rjs-follow-card-button is-following' : 'rjs-follow-card-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='rjs-follow-card'>
      <header className='rjs-follow-card-header'>
        <img className='rjs-follow-card-avatar' src={`https://unavatar.io/${userName}` } alt="Avatar" />
        <div>
          <strong className='rjs-follow-card-name'>{ children}</strong>
          <span className='rjs-follow-card-alias'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={btnClassName} onClick={handleClick}>
          <span className="rjs-fllow-card-text">{ followingText }</span>
          {isFollowing && <span className="rjs-fllow-card-following-hover">Dejar de seguir</span>}
        </button>
      </aside>
   </article>
  )
}
