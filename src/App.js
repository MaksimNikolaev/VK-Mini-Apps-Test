import './App.css';
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Screen } from './components/Screen/Screen';


function App() {
  return (
<AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel="main">          
            <Panel id="main">
              <Screen />                           
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
