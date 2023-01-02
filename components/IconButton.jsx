import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons'

export default function IconButton({icon, onPress, color}) {
    return (
        <Pressable
            android_ripple={{color: '#FFFFFF91'}}
            onPress={onPress}
            style={({pressed}) => pressed && styles.pressed}
        >
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});