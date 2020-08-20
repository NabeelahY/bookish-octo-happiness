import {
  REACT_APP_IDENTITY_POOL_ID,
  REACT_APP_REGION,
  REACT_APP_USER_POOL_ID,
  REACT_APP_USER_POOL_WEB_CLIENT_ID,
} from 'react-native-dotenv';

const awsConfig = {
  identityPoolId: REACT_APP_IDENTITY_POOL_ID,
  region: REACT_APP_REGION,
  userPoolId: REACT_APP_USER_POOL_ID,
  userPoolWebClientId: REACT_APP_USER_POOL_WEB_CLIENT_ID,
};

export default awsConfig;
