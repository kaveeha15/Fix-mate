import { Link, useNavigation } from "expo-router";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";

import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from '../services/firebase';

const SignUp = () => {


    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })



    const handleValues = (property: string, value: string) => {

        setUserCredentials((prev) => ({ ...prev, [property]: value }))

    }


    const navigator = useNavigation<any>()
    const signUp = async () => {

        if (!userCredentials.email || !userCredentials.password || !userCredentials.confirmPassword) {
            return
        }

        if (userCredentials.password !== userCredentials.confirmPassword) {
            return
        }

        try {

            const responce = await createUserWithEmailAndPassword(
                auth,
                userCredentials.email.trim(),
                userCredentials.password,
               
            )
            const user = responce.user

            console.log(user)

            navigator.navigate("(tabs)")

        } catch (err) {
            console.log(err)
        }


    }

    const handleSignUp = () => {
        Keyboard.dismiss();
        signUp()


    };

    return (
        <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 12 : 0}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}

                    >
                        <View style={styles.header}>
                            <Text style={styles.title}>Welcome Back</Text>
                            <Text style={styles.subtitle}>Let&apos;s find out your services</Text>
                        </View>

                        <View style={styles.form}>
                            <View style={styles.fieldGroup}>
                                <Text style={styles.label}>E-Mail Address</Text>
                                <TextInput
                                    style={styles.input}
                                    value={userCredentials.email}
                                    onChangeText={(value) => handleValues('email', value)}
                                    placeholder="you@example.com"
                                    placeholderTextColor="#94A3B8"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="emailAddress"
                                    returnKeyType="next"
                                />
                            </View>

                            <View style={styles.fieldGroup}>
                                <Text style={styles.label}>Enter Password</Text>
                                <TextInput
                                    style={styles.input}
                                    value={userCredentials.password}
                                    onChangeText={(value) => handleValues('password', value)}
                                    placeholder="••••••••"
                                    placeholderTextColor="#94A3B8"
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="password"
                                    returnKeyType="done"
                                    onSubmitEditing={handleSignUp}
                                />
                            </View>
                            <View style={styles.fieldGroup}>
                                <Text style={styles.label}>Confirm Password</Text>
                                <TextInput
                                    style={styles.input}
                                    value={userCredentials.confirmPassword}
                                    onChangeText={(value) => handleValues('confirmPassword', value)}
                                    placeholder="••••••••"
                                    placeholderTextColor="#94A3B8"
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="password"
                                    returnKeyType="done"
                                    onSubmitEditing={handleSignUp}
                                />
                            </View>

                            <Pressable
                                style={({ pressed }) => [
                                    styles.button,
                                    pressed && styles.buttonPressed,
                                ]}
                                onPress={handleSignUp}
                            >
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </Pressable>
                            <View><Text>Already have an account? <Link href="/"><TouchableOpacity className="text-blue-700"><Text>Login here</Text></TouchableOpacity></Link></Text></View>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#F8FAFC",
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
    header: {
        marginBottom: 32,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#0F172A",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: "#475569",
        lineHeight: 22,
    },
    form: {
        gap: 20,
    },
    fieldGroup: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#1E293B",
    },
    input: {
        height: 50,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#CBD5E1",
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#0F172A",
    },
    button: {
        marginTop: 8,
        height: 52,
        backgroundColor: "#2563EB",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonPressed: {
        opacity: 0.88,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default SignUp;