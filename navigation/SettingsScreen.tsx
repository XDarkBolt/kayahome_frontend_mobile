import { Text, View } from "react-native";
import Neumorph from "../styles/Neumorph";

const SettingsScreen = () => {
    var CompArray = new Array();
    CompArray[0] = 'LIST1';
    CompArray[1] = 'LIST2';

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(28, 28, 30)' }}>
            <Neumorph size={100}>
                <Text style={{color: 'white'}}>{CompArray}</Text>
            </Neumorph>
        </View>
    );
};

export default SettingsScreen;