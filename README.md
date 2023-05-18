
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Download the Backend [here](https://github.com/Eiks-exe/P9-front-end-dashboard)
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/user/12](http://localhost:3000/user/12) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Mode

You can change the way of getting data (using the api or the mock data) by going into: 
``./src/pages/UserPage.tsx``

then change the function call at line 33 
from `  let { user } = useUserContext(IntId, true, true, true, "remote");` 
to `  let { user } = useUserContext(IntId, true, true, true, "local");`

then open [http://localhost:3000/user/12](http://localhost:3000/user/12)