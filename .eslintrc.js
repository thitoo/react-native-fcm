module.exports = {
  root: true,
  extends: ['@react-native-community', "plugin:react-hooks/recommended"],
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": 'warn' // <--- THIS IS THE NEW RULE
  }
};
