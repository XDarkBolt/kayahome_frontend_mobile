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
        position: 'absolute',
        shadowColor: 'rgb(242, 242, 247)',
        shadowOffset: {
            width: -2.5,
            height: -2.5,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2.5,
        elevation: 3,
    },
    neuBottom: {
        shadowColor: 'rgb(10, 10, 12)',
        shadowOffset: {
            width: 2.5,
            height: 2.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.5,
        elevation: 3,
    },
    inner: {
        backgroundColor: 'rgb(28, 28, 30)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
});

export default Neumorph;