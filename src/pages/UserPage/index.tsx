// Import React library and necessary components and styles
import React from 'react';
import AppLayout from '../../Components/AppLayout';
import { useUserContext } from '../../context/UserContext';
import './UserPage.scss';
import InfoCard from '../../Components/InfoCard';
import ActivityBarchart from '../../Components/ActivityBarChart';
import DurationLineChart from '../../Components/DurationLineChart';
import PerfRadarChart from '../../Components/PerfRadarChart';
import ScoreChart from '../../Components/ScoreChart';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

/**
 * Props for UserPage component
 */
type Props = {};

/**
 * UserPage component
 * @param {Props} props - Component props
 * @returns {JSX.Element} UserPage component JSX element
 */
const UserPage: React.FC<Props> = (props) => {
  // Get the user ID from the URL parameters
  const { id } = useParams();
  let IntId = 12;
  if (id) {
    IntId = parseInt(id);
  }

  // Fetch the user data using the UserContext
  let { user } = useUserContext(IntId, true, true, true, "remote");
  const currentUser = user;

  // Render the component once the user data is available
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
  ) : (
    <>
      <NotFound />
    </>
  );
};

// Export the UserPage component
export default UserPage;