import { ModalPortal } from 'react-native-modals';
import { Provider } from 'react-redux';
import StackNavigator from './navigation/StackNavigator';
import { StyleSheet } from 'react-native';
import { store } from './store';

export default function App() {
  return (
    <>
    <Provider store={store}>
     <StackNavigator/>
     <ModalPortal/>
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
