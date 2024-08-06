const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.escolaberta.smartswitch.dev';
  }

  if (IS_PREVIEW) {
    return 'com.escolaberta.smartswitch.preview';
  }

  return 'com.escolaberta.smartswitch';
};

const getAppName = () => {
  if (IS_DEV) {
    return '(Dev) Smart Switch';
  }

  if (IS_PREVIEW) {
    return '(Preview) Smart Switch';
  }

  return 'Smart Switch';
};


export default {
  name: getAppName(),
  "slug": "smart-switch",
  "version": "1.0.4",
  "orientation": "portrait",
  "icon": "./assets/images/icon.png",
  "scheme": "myapp",
  "userInterfaceStyle": "automatic",
  "splash": {
    "image": "./assets/images/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  "ios": {
    "supportsTablet": true,
    bundleIdentifier: getUniqueIdentifier(),
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/images/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    },
    package: getUniqueIdentifier(),
  },
  "web": {
    "bundler": "metro",
    "output": "static",
    "favicon": "./assets/images/favicon.png"
  },
  "plugins": [
    "expo-router"
  ],
  "experiments": {
    "typedRoutes": true
  },
  "extra": {
    "router": {
      "origin": false
    },
    "eas": {
      "projectId": "4441055a-5451-42e4-abb3-a2a824541a65"
    }
  },
  "owner": "escolaberta",
  "runtimeVersion": {
    "policy": "appVersion"
  },
  "updates": {
    "url": "https://u.expo.dev/4441055a-5451-42e4-abb3-a2a824541a65"
  }
}
