module.exports = {
    "apps/runtime-library/**/*.*": () => [
        // "npm run lint -w=runtime-library --",
        "npm run test -w=runtime-library -if-present -- --coverage --",
        // "npm run jest-coverage-ratchet -w=runtime-library --",
    ],
    "apps/MFE/ProductGroup1/ProductSet1/sample-mfe/**/*.*": () => [
        // "npm run lint -w=sample-mfe --",
        "npm run test -w=sample-mfe -if-present -- --coverage --",
        // "npm run jest-coverage-ratchet -w=sample-mfe --",
    ],
    "apps/pages/area-dashboard/**/*.*": () => [
        // "npm run lint -w=area-dashboard --",
        "npm run test -w=area-dashboard -if-present -- --coverage --",
        // "npm run jest-coverage-ratchet -w=area-dashboard --",
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
