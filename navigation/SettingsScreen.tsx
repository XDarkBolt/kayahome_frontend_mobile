import { Text, View } from "react-native";

const SettingsScreen = () => {
    var CompArray = new Array();
    CompArray[0] = 'LIST1';
    CompArray[1] = 'LIST2';

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{CompArray}</Text>
        </View>
    );
};

export default SettingsScreen;