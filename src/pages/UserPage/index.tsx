import React from 'react'
import AppLayout from '../../Components/AppLayout'
import { UserContext } from '../../context/UserContext'

type Props = {}

const UserPage = (props: Props) => {
  const currentUser = React.useContext(UserContext)
  return (
    <AppLayout>
      <div id="user-container">
        <h1 className="welcome-user">UserPage {currentUser.main?.userInfos.firstName}</h1>
      </div>
    </AppLayout>
  )
}

export default UserPage