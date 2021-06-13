import {LoginManager} from 'react-native-fbsdk-next';
import {Profile} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const FBLogout = () => {
  LoginManager.logOut();
};

const getFBCurrentProfile = () => {
  return new Promise((resolve, reject) => {
    Profile.getCurrentProfile()
      .then(currentProfile => resolve(currentProfile))
      .catch(err => reject(err));
  });
};

const FBLogin = () => {
  return new Promise((resolve, reject) => {
    LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then(
        result => {
          if (result.isCancelled) reosolve(null);
          else {
            getFBCurrentProfile()
              .then(profile => resolve(profile))
              .catch(err => reject(err));
          }
        },
        function (error) {
          console.log('Login fail with error: ' + error);
          reject(err);
        },
      )
      .catch(err => reject(err));
  });
};

const GooleLogin = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      resolve(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        reject(statusCodes.SIGN_IN_CANCELLED);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        reject(statusCodes.IN_PROGRESS);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        reject(statusCodes.PLAY_SERVICES_NOT_AVAILABLE);
      } else {
        reject(error);
      }
    }
  });
};

const getGoogleCurrentProfile = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      resolve(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        reject(statusCodes.SIGN_IN_REQUIRED);
      } else {
        reject(error);
      }
    }
  });
};

const GoogleLogout = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      resolve(true)
    } catch (error) {
      reject(error)
    }
  });
};

export {
  FBLogout,
  getFBCurrentProfile,
  FBLogin,
  GooleLogin,
  getGoogleCurrentProfile,
  GoogleLogout
};
