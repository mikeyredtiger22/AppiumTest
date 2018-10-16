# AppiumTest
Demo project to test complex React Native features in Appium.

Only testing with Android for now.

Started project with react-native init instead of create-react-native-app. 

Libraries used / tested:
- react-native-elements
- react-native-navigation

Libraries & Features to be used / tested:
- react-native-maps
- Permissions (location)
- Notifications
- Navigation stack creation


## When cloning project (or updating dependencies):
- Open react-native-navigation android project (will show as library in android studio, otherwise can be found in node_modules/react-native-navigation/android).
- Change this in app/build.gradle:
```
...
android {
    compileSdkVersion rootProject.ext.compileSdkVersion
    buildToolsVersion rootProject.ext.buildToolsVersion

    defaultConfig {
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
    ...
    }
...
```
- Change `compile` to `implementation` and change `testCompile` to `testImplementation`
- Change support library versions to:
```
    implementation "com.android.support:design:${rootProject.ext.supportLibVersion}"
    implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
```

### Trouble shooting
If you see
```
Cannot find module '../build/safe-execute' from 'commands.js' at Resolver.resolveModule
```
run `node ./node_modules/wd/scripts/build-browser-scripts.js`
