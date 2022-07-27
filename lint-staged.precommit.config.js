module.exports = {
    "apps/runtime-library/**/*.*": () => [
        // "npm run lint -w=runtime-library --",
        "npm run test -w=runtime-library -if-present -- --coverage --",
        // "npm run jest-coverage-ratchet -w=runtime-library --",
    ],
    "apps/MFE/ProductGroup1/ProductSet1/sample-mfe/**/*.*": () => [
        // "npm run lint -w=sample_mfe --",
        "npm run test -w=sample_mfe -if-present -- --coverage --",
        // "npm run jest-coverage-ratchet -w=sample_mfe --",
    ],
    "apps/pages/main-app/**/*.*": () => [
        // "npm run lint -w=main-app --",
        "npm run test -w=main-app -if-present -- --coverage --",
        // "npm run jest-coverage-ratchet -w=main-app --",
    ],
    "packages/Button/**/*.*": () => [
        // "npm run lint -w=@next/button --",
        "npm run test -w=@next/button -if-present -- --coverage --",
        // "npm run jest-coverage-ratchet -w=@next/button --",
    ],
    "packages/Tooltip/**/*.*": () => [
        // "npm run lint -w=@next/tooltip --",
        "npm run test -w=@next/tooltip -if-present -- --coverage --",
        // "npm run jest-coverage-ratchet -w=@next/tooltip --",
    ],
}
