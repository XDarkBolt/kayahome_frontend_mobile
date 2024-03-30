import { Text, View } from "react-native";
import Neumorph from "../styles/Neumorph";

const SettingsScreen = () => {
    var CompArray = new Array();
    CompArray[0] = 'LIST1';
    CompArray[1] = 'LIST2';

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
            <Neumorph size={50}>
                <Text style={{ width: 100, height: 100, backgroundColor: '#CCC'}}>{CompArray}</Text>
            </Neumorph>
        </View>
    );
};

export default SettingsScreen;