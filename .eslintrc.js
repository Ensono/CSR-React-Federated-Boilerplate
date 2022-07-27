module.exports = {
    extends: ["react-app", "airbnb", "prettier"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                semi: false,
                trailingComma: "es5",
                printWidth: 100,
                singleQuote: false,
            },
        ],
        radix: ["error", "as-needed"],
        "import/no-unresolved": "off",
        "import/no-named-as-default": "off",
        "no-console": ["warn"],
        "global-require": "off",
        "react/jsx-props-no-spreading": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "react/jsx-indent": "off",
        "react/destructuring-assignment": "off",
        "react/default-props-match-prop-types": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/prefer-stateless-function": "off",
        "import/no-extraneous-dependencies": "off",
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".js", ".jsx"],
            },
        ],
        "react/prop-types": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "no-useless-constructor": "off",
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                components: ["Link", "ButtonLink"],
                specialLink: ["to", "as"],
                aspects: ["noHref", "invalidHref", "preferButton"],
            },
        ],
    },
    settings: {},
}
