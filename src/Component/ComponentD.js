import React from 'react'
import { UserConsumer } from './ContextB'

function ComponentD() {
  return (
    <UserConsumer>
        {
            (username) => {
                return <div>Greetings {username}</div>;
            }
        }
    </UserConsumer>
  )
}

export default ComponentD
