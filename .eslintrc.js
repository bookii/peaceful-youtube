export default {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": ["eslint:recommended", "prettier"],
    "plugins": ["prettier"],
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": "error"
    },
};
