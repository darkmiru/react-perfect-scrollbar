module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",

    "rules": {
        "indent": [2, 2, {
            SwitchCase: 1,
        }],
        "prefer-const": 0,
        "no-param-reassign": [2, { props: false }],
        "no-underscore-dangle": [2, {
            allowAfterThis: true,
            allowAfterSuper: true,
        }],
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": [2, 2],
        "react/jsx-indent-props": [2, 2],
        "class-methods-use-this": "off",
        // concerned
        "react/forbid-prop-types": "off",
        "react/no-unused-prop-types": "off",
        "no-plusplus": "off",
        "no-bitwise": "off",
        "react/destructuring-assignment": "off",
        "linebreak-style": 0,
        "no-console": 0,
    },

    "globals": {
        "document": false,
    },
}
