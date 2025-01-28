import Animated, {useAnimatedStyle, useSharedValue, withSequence, withTiming} from 'react-native-reanimated';
import { THEME} from "../../styles/theme";
import {useWindowDimensions} from "react-native";
import {BlurMask, Canvas, Rect} from "@shopify/react-native-skia";
import {useEffect} from "react";

const STATUS = ['transparent', THEME.COLORS.BRAND_LIGHT, THEME.COLORS.DANGER_LIGHT];

type Props = {
    status: number;
};

export function OverlayFeedback({ status }: Props) {
    const color = STATUS[status];
    const opacity = useSharedValue(0)

    const { height, width } = useWindowDimensions();

    const styleAnimated = useAnimatedStyle(() => {
        return {
            backgroundColor: color,
            opacity: opacity.value
        };
    })

    useEffect(() => {
        opacity.value = withSequence(
            withTiming(1, {duration: 300}),
            withTiming(0, {duration: 300}),
        )
    }, [status]);

    return (
        <Animated.View style={[{ height, width, position: 'absolute' }, styleAnimated]}>
            <Canvas style={{ flex: 1 }}>
                <Rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    color={color}
                >
                    <BlurMask blur={50} style="inner"  respectCTM={true}/>
                </Rect>
            </Canvas>
        </Animated.View>
    );
}
