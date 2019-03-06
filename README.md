# Waavi [React Native](https://facebook.github.io/react-native/) app for iOS and Android.

## Getting Started

### Installing dependencies

```
brew install node
brew install watchman
npm install -g react-native-cli
```

-   [Reactotron](https://github.com/infinitered/reactotron).

#### iOS

-   Install Xcode.
-   Run:

```
yarn
```

-   Running with:

```
yarn run ios
```

-   Running on device: Open the project in Xcode and run in your mobile phone.
-   Show developer options: Shake or cmd + d.

#### Android

-   React Native requires a recent version of the Java SE Development Kit (JDK).
    [Download and install JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) or newer if needed.
-   Download and install [Android Studio](https://developer.android.com/studio/index.html).
-   You need this in your bash profile:

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

-   Open the project with Android Studio and install the missing SDK.
-   Install genymotion, add a virtual device and go to settings > ADB > Use custom Android SDK > Browse (/Users/username/Library/Android/sdk).
-   Run:

```
yarn
```

-   Running with:

```
yarn run android
```

-   Running on device: The same with your android mobile in Debugging Mode over USB.
-   Show developer options: Shake or click the icon in genymotion device sidebar.

#### Environment

If need use a different environment:

-   You should be created a .env file and changed props

If you need make a change in env file, youve have running the next command after updated file:

```
yarn refresh-dotenv
```

or use the watch command

```
yarn refresh-dotenv-watch
```

## Rename a project

Use [react-native-rename](https://github.com/junedomingo/react-native-rename).

## Generating a release apk

-   Generating a signing key:

```
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 1000
```

-   Setting up gradle variables:

1.  Place the my-release-key.keystore file under the android/app directory in your project folder.
2.  Edit the file ~/.gradle/gradle.properties and add the following (replace **\*** with the correct keystore password, alias and key password),

```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

-   Edit the file android/app/build.gradle in your project folder and add the signing config:

```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

-   Generating the release APK:

```
cd android && ./gradlew assembleRelease
```

-   Testing the release build of your app, run this command with your real device connected:

```
react-native run-android --variant=release
```

## Upload to Apple Store

-   \$ yarn bump-version 1.1.20 47
-   \$ cp env/.env.master .env
-   XCode: Project Navigator: Select Canvas > Libraries > RCTFBSDK.xcodeproj > Build Settings > Framework Search Paths > Edit -> Replace "~/Documents/FacebookSDK" by "\$(HOME)/Documents/FacebookSDK".
-   XCode: Product > Clean
-   XCode: Run on a simulator or device to check it's working (with backend in production)
-   (XCode: if there is a build problem with Facebook libraries... try removing everthing from ~/Library/Developer/XCode/DerivedData/)
-   XCode: Select target -> Generic iOS Device
-   XCode: Product > Archive (wait...)
-   XCode Organizer: Select the generated archive and press on "Distribute App
-   XCode Organizer: Select iOS App Store and Next
-   XCode Organizer: Select Upload and Next
-   XCode Organizer: Next (up until now, use the default config on this panel)
-   XCode Organizer: Select corresponding certificate and profile and Next
-   XCode Organizer: Upload (wait...)
-   XCode Organizer: You sould see a success screen

-   appstoreconnect: Go to App
-   appstoreconnect: Click on "Add Version" and set the version number (1.1.20)
-   appstoreconnect: Set meta info (important: "what's new" field)
-   appstoreconnect: Add the compilation (it could take a long time to be proccessed before you can select it, or even it could not appear during processing)
-   appstoreconnect: Save
-   appstoreconnect: Send to review
-   appstoreconnect: "¿Has añadido o cambiado alguna prestación de encriptación desde la última vez que enviaste esta app?" -> No
-   appstoreconnect: "¿Esta app utiliza el Identificador para publicidad (IDFA)?" -> No
-   appstoreconnect: Send
-   appstoreconnect: Wait until Apple reviews and accepts your app (tipically 1 or 2 days)
-   appstoreconnect: Publish

## New build release for Android

1.  Go to https://appcenter.ms/
2.  Find and select the app (team: WAAVI -> Apps ).
3.  Go to "Build" on side menu.
4.  Click on the branch you want to use.
5.  Click on "Build now"

For AppStore:

6.  Acceder a la consola de Google Play https://play.google.com/apps/publish
7.  Seleccionar la app correspondiente.
8.  Gestión de versiones -> Versiones de la aplicación -> Administrar gestión de producción -> Crear versión
9.  Añadir fichero apk.
10. Rellenar -> Guardar -> revisar -> Iniciar proceso de subir a producción

For Ad Hoc test release (using Mobile Center):

6.  Click on "Distribute"
7.  Select group to distribute and "Next"
8.  Click on "Distribute build".

## New build release for iOS

1.  Open XCode with an iPhone connected, run the App on the device, and stop it when you check it's working.
2.  Product -> Archive.
3.  If Organizer hasn't been opened automatically, open it manually (Window -> Organizer).

For AppStore:

4.  Select the app and click on "Upload to AppStore...".
5.  App Store distribution options -> Next (with everything checked as default)
6.  Select certificate and profile -> Next
7.  Review \*.ipa -> Upload -> waiting... -> Done
8.  Open iTunes Connect and go to the app's panel.
9.  Click on "Add Version or Platform" -> fill version.
10. Fill any changes.
11. Wait for a long while (20 minutes?) until you can see a "plus" button next to Build option to add the build.
12. Save & submit for review
13. Export Compliance: No & Advertising Identifier: No -> Submit

For Ad Hoc test release (using Mobile Center):

4.  Select the app and click on "Export".
5.  Select Ad Hoc distribution.
6.  On "Re-sign" app options, select "Manually manage signing"
7.  Select certificate and profile (downloading it).
8.  Wait and click on "Export".
9.  Open the generated folder and find the .ipa file inside it.
10. Go to https://appcenter.ms/
11. Find and select the app (team: WAAVI -> Apps ).
12. Go to "Distribute > Groups" on side menu.
13. Select the group.
14. Click on button "Distribut new release".
15. Upload the .ipa file, and "Next" > Next > ... > "Distribute".

## Code Push (AppCenter)

https://docs.microsoft.com/en-us/appcenter/distribution/codepush/react-native#getting-started

### Notas importantes sobre CodePush y Apple's Developer Agreement:

-   Apple permite esto siempre que el usuario no se entere. Es decir, aunque CodePush lo permita, no se debe nunca mostrar una petición al usuario para que acepte la actualización o
    usar un Spinner o algo de descarga. Debe ser siempre en segundo plano.
-   Apple permite injectar código (js, assets, ...) si es para bugfixes, cambios menores, features menores, .... Nunca debemos darle excusas para que consideren que es un cambio
    significativo.

### Release

```
appcenter codepush release-react -a <ownerName>/<appName> -d <deploymentName> -t <targetBinaryVersion> [-m|--mandatory] [-v|--version]
```

https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cli#releasing-updates-react-native

#### \*Tip

You can set current \<ownerName\>/\<appName\> and avoid having to write it for every command:

```
appcenter apps set-current WAAVI/Canvas-iOS
```

```
appcenter apps get-current
```

## More info project

[DOCUMENTATION](./README)
