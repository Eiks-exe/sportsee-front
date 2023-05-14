// Import React library and necessary components and styles
import React from 'react';
import AppLayout from '../../Components/AppLayout';
import { UserContext, UserContextProvider, useUserContext } from '../../context/UserContext';
import './UserPage.scss';
import InfoCard from '../../Components/InfoCard';
import ActivityBarchart from '../../Components/ActivityBarChart';
import DurationLineChart from '../../Components/DurationLineChart';
import PerfRadarChart from '../../Components/PerfRadarChart';
import ScoreChart from '../../Components/ScoreChart';
import { useParams } from 'react-router-dom';


// Define the type of props
type Props = {
 
};

// Define the UserPage component
const UserPage: React.FC<Props> = (props) => {
  const {id} = useParams()
  let IntId = 12
  if (id){
    IntId = parseInt(id)
  }
  let {user, isLoading, error}= useUserContext(IntId, true, true, true)
  const currentUser= user
  return currentUser?.main ? (
      <AppLayout>
        <div id="user-container">
          <div className="welcome">
            {/* Greet the user with their first name */}
            <h1 className="welcome-user">Bonjour <span>{currentUser.main.userInfos.firstName}</span></h1>
            {/* Congratulate the user on achieving their goals */}
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="uHstack">
            <div className="ChartGrid">
              {/* Display user's progress chart */}
              <ActivityBarchart sessions={currentUser.activity?.sessions} />
              <div className="chart-row">
                <DurationLineChart sessions={currentUser.avgSession?.sessions} />
                <PerfRadarChart data={currentUser.performance} />
                <ScoreChart score={currentUser.main.todayScore ? currentUser.main.todayScore : 0} />
              </div>
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
  ): (<></>)
};

// Export the UserPage component
export default UserPage;


