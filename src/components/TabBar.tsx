import { MID, PURPLE } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { Dimensions, LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TabButton from './TabButton';

const TabBar = ({ state, descriptors, emitter }: { state: any; descriptors: any,emitter:any }) => {

    const primaryColor =PURPLE
    const inactiveColor = MID

    const [dimentions, setDimentions] = useState({ height: 20, width: 100 })
    const router = useRouter();
    const insets = useSafeAreaInsets()

    const onTabBarLayout = useCallback((e: LayoutChangeEvent) => {
        setDimentions({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width
        })
    }, [])

    const handlePress = () => {

    }

    return (
        <View onLayout={onTabBarLayout} style={[styles.container, { marginBottom: insets.bottom }]} >
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const targetHref = route.name === 'index' ? '/' : `/${route.name}`;

                    if (!isFocused) {
                        router.navigate({
                            pathname: targetHref as any,
                            params: route.params,
                        });
                    }
                };

                const onLongPress = () => {
                    // Optional: add custom long-press logic here if needed
                };

                return (
                    <TabButton
                        key={route.name}
                        index={index}
                        routeKey={route.key}
                        onPress={onPress}
                        onLongPress={handlePress}
                        isFocused={isFocused}
                        routeName={route.name}
                        color={isFocused ? primaryColor : inactiveColor}
                        label={label}
                    />
                );
            })}
        </View>
    );
};

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({

    container: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        backgroundColor: "#030305",
        paddingVertical: 15,
        borderRadius: 16,
        width: width - 20,
        overflow: 'hidden',



    }

})

export default TabBar;