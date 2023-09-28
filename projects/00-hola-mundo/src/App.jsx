
import './App.css';
import TwitterFollowCard from './TwitterFollowCard';


export function App() {
  const users = [
    {
      userName: 'franciscoj_rg',
      initialIsFollowing: true,
      name: 'Francisco Robles'
    },
    {
      userName: 'carlosazaustre',
      initialIsFollowing: false,
      name: 'Carlos Azaustre'
    },
    {
      userName: 'MoureDev',
      initialIsFollowing: true,
      name: 'Brais Moure'
    }
  ]

  // NOT RECOMENDED, just in specific cases
  /*
  const propsByObj = {
    initialIsFollowing: true,
    userName: 'midudev',
    name: 'Miguel Durán'
  }
  */

  return (
    <div>
      {
        users.map(({ userName, name, initialIsFollowing }) =>
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={initialIsFollowing}>
            {name}
          </TwitterFollowCard>
        )
      }
      
      {/*<TwitterFollowCard {...propsByObj} >{propsByObj.name}</TwitterFollowCard>*/}
    </div>
  )
}
