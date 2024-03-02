import {useContext} from 'react'

import { AuthContext } from '../contexts/ContextoAuth'

function Home() {

  const {token} = useContext(AuthContext)

  return (
    <div>
      {token ? (
        <p>existo: {token}</p>
      ): (
        <p>nao existo</p>
      )}
      <p>asdsa</p>
    </div>
  )
}

export default Home
