import {SafeAreaView} from 'react-native';
// import HolaMundoScreen from './src/screens/HolaMundoScreen';
// import CounterScreen from './src/screens/CounterScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {DimensionsScreen} from './DimensionsScreen';
import {PositionScreen} from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*  <HolaMundoScreen />; // <CounterScreen /> <BoxObjectModelScreen />*/}
      {/* <DimensionsScreen></DimensionsScreen> */}
      <PositionScreen></PositionScreen>
    </SafeAreaView>
  );
};

export default App;
