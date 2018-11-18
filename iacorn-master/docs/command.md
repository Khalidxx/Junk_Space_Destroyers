# command

```bash
$ ionic generate
$ ionic generate component
$ ionic generate directive
$ ionic generate page
$ ionic generate pipe
$ ionic generate provider
$ ionic generate tabs
$ ionic generate component foo
$ ionic generate page Login
$ ionic generate page Detail --no-module
$ ionic generate page About --constants
$ ionic generate pipe MyFilterPipe
```

Options:

- `--no-module` Do not generate an NgModule for the component
- `--constants` Generate a page constant file for lazy-loaded pages

## google map

```bash
$ yarn add @ionic-native/google-maps

$ ionic cordova plugin add cordova-plugin-googlemaps \
--variable API_KEY_FOR_ANDROID="AIzaSyCrLo2r2ajGYL_47KIlJJR2OxRlp-bVc0s" \
--variable API_KEY_FOR_IOS="AIzaSyCrLo2r2ajGYL_47KIlJJR2OxRlp-bVc0s"
```

## emulate

```bash
// ios
$ ionic cordova build ios
$ ionic cordova emulate ios --livereload

// android
$ ionic cordova emulate android --livereload
```
