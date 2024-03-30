import { SafeAreaView, ScrollView, Text } from "react-native";
import FlatCards from "../components/FlatCards";
import HorizontalCards from "../components/HorizontalCards";

const MyScreen = () => {

    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: 'rgb(28, 28, 30)' }}>
            <ScrollView>
                <FlatCards />
                <HorizontalCards />
            </ScrollView>
        </SafeAreaView>
    );
};

export default MyScreen;