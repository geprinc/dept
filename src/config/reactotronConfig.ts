import Immutable from 'seamless-immutable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron, { overlay, trackGlobalErrors } from 'reactotron-react-native';
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
import apisaucePlugin from 'reactotron-apisauce';
import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';
import { Tron } from '@interfaces/reactotron';

// Console augmentation
declare global {
  interface Console {
    tron: Tron;
  }
}

// If you want to use a physical device and connect it to reactotron, execute first 'adb reverse tcp:9090 tcp:9090'
if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron.configure({
    name: 'BuscoDuenios',
    host: scriptHostname,
    createSocket: path => new ReactotronFlipper(path)
  })
    .use(trackGlobalErrors({}))
    .use(apisaucePlugin())
    .use(
      reactotronRedux({
        onRestore: state =>
          Object.entries(state).reduce(
            (prev, [key, value]) => ({ ...prev, [key]: key === 'nav' ? value : Immutable(value) }),
            {}
          )
      })
    )
    .use(overlay())
    .setAsyncStorageHandler?.(AsyncStorage)
    .connect();

  // eslint-disable-next-line no-console
  console.tron = {
    log: Reactotron.logImportant,
    clear: Reactotron.clear,
    customCommand: Reactotron.onCustomCommand,
    display: Reactotron.display
  };
}

/* Here is an example of how to use customCommand

const selfRemoving = console.tron.customCommand({
  command: "remove",
  handler: () => {
    selfRemoving() // Calling it unregisters the command
  },
})

This will display a button in Reactotron which will execute the whole handler
block when clicked.

Is important to know that a customCommand can't be declared/registered twice
So we have to unregister it if we are going to run the same block again.
If you use this pattern the customCommand will be unregistered when executed
to avoid conflics in the future. A good way to register a customCommand is in the
ComponentDidMount life cycle method of the desired component

*/

export default Reactotron;
