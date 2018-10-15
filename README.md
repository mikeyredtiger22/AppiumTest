# AppiumTest
Demo project to test Appium complex features in React Native.

Only testing with Android for now.

Started project with react-native init instead of create-react-native-app. 
Seemed to solve slow appium execution issues from last project. 

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
