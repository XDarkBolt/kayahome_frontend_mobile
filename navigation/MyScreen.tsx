import { SafeAreaView, ScrollView } from "react-native";
import FlatCards from "../components/FlatCards";
import ElevatedCards from "../components/ElevatedCards";

const MyScreen = () => {

    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards />
                <ElevatedCards />
            </ScrollView>
        </SafeAreaView>
    );
};

export default MyScreen;