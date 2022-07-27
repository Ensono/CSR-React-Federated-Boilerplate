"use strict"

module.exports = () => ({
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true,
        jest: true,
    },
    extends: [
        "airbnb",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:compat/recommended",
        "plugin:jest/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/typescript",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    globals: {
        React: "writable",
    },
    plugins: ["react", "jest", "jsx-a11y"],
    ignorePatterns: ["temp.js", "node_modules/", "**/*.cy.ts", "integration-tests/"],
    rules: {
        "lines-between-class-members": ["error", "always", {exceptAfterSingleLine: true}],
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": 0,
        "react/jsx-indent": ["off"],
        "react/jsx-indent-props": ["off"],
        "consistent-return": 0,
        "import/prefer-default-export": 0,
        "compat/compat": 0,
        "react/destructuring-assignment": 0,
        "jest/no-commented-out-tests": 0,
        "jest/no-mocks-import": 0,
        "no-underscore-dangle": 0,
        "import/no-named-as-default": 0,
        "max-classes-per-file": 0,
        "import/extensions": [
            "error",
            "never",
            {
                js: "never",
                jsx: "never",
            },
        ],
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".jsx", ".tsx"],
            },
        ],
        semi: ["error", "never"],
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies": ["error", {devDependencies: ["**/*.test.tsx"]}],
        "no-use-before-define": 1,
        "no-shadow": 1,
        "react/function-component-definition": 0,
        "react/require-default-props": 0,
    },
    settings: {
        react: {
            version: "detect",
            // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        jest: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
})
