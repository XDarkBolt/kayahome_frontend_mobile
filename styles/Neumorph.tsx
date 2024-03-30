import { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type NeumorphProps = {
    children: ReactNode;
    size: number;
    style?: ViewStyle;
};

export const Neumorph = ({ children, size, style }: NeumorphProps) => {
    return (
        <View style={styles.neuTop}>
            <View style={styles.neuBottom}>
                <View style={[styles.inner, { width: size || 40, height: size || 40 }, style]}>
                    {children}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    neuTop: {
        shadowColor: '#000000',
        shadowOffset: {
            width: -5,
            height: -5,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 1,
    },
    neuBottom: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 1,
    },
    inner: {
        backgroundColor: '#e0e5ec',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#45aa26',
        borderWidth: 10,
    },
});

export default Neumorph;