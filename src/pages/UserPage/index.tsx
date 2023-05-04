// Import React library and necessary components and styles
import React from 'react';
import AppLayout from '../../Components/AppLayout';
import { UserContext } from '../../context/UserContext';
import './UserPage.scss';
import InfoCard from '../../Components/InfoCard';

// Define the type of props
type Props = {};

// Define the UserPage component
const UserPage = (props: Props) => {
  // Get the current user from UserContext using React's useContext hook
  const currentUser = React.useContext(UserContext);

  // Render the UserPage component with the current user's information
  return (
    <AppLayout>
      <div id="user-container">
        <div className="welcome">
          {/* Greet the user with their first name */}
          <h1 className="welcome-user">Bonjour <span>{currentUser.main?.userInfos.firstName}</span></h1>
          {/* Congratulate the user on achieving their goals */}
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="uHstack">
          <div className="ChartGrid">
            {/* Display user's progress chart */}
          </div>
          <div className="infoCardGrid">
            {/* Display user's key data using InfoCard component */}
            <InfoCard title="Calories" iconSrc={`/ressources/calories-icon.svg`} value={currentUser.main?.keyData.calorieCount} unit='kCal' />
            <InfoCard title="Proteines" iconSrc={`/ressources/protein-icon.svg`} value={currentUser.main?.keyData.proteinCount} unit='g' />
            <InfoCard title="Glucides" iconSrc={`/ressources/carbs-icon.svg`} value={currentUser.main?.keyData.carbohydrateCount} unit='g' />
            <InfoCard title="Lipides" iconSrc={`/ressources/fat-icon.svg`} value={currentUser.main?.keyData.lipidCount} unit='g' />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

// Export the UserPage component
export default UserPage;