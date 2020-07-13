module.exports = {
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react'],
  rules: {
    "prettier/prettier": [
      "error",
        {
        "singleQuote": true,
        "endOfLine":"auto"
        }
    ]
  }
};
