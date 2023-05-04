import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen: React.FC = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
        },
        title: {
            fontSize: 32,
            fontWeight: 'bold',
            marginBottom: 16,
        },
        subtitle: {
            fontSize: 18,
            fontWeight: 'normal',
            color: '#888',
        },
    });
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to My App</Text>
            <Text style={styles.subtitle}>This is the home screen</Text>
        </View>
    );
};

export default HomeScreen;
