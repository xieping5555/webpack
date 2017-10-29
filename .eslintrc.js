module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Vue": true
    },
    "parserOptions": {
        "experimentalObjectRestSpread": true,
        "arrowFunctions": true,
        "classes": true,
        "modules": true,
        "defaultParams": true
    },
    "extends": [
        "plugin:@cgroup/sfchecklist/checklist"
    ],
    "plugins": [
        "@cgroup/sfchecklist"
    ],
    "rules": {
        "no-magic-numbers": 0,
        "no-console": 0,
        "indent": [1, 4],
        "strict": 0

    }
}