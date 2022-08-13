import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, StatusBar } from 'react-native'
import { Button } from '../components/Button';

type Skill = {
    id: string,
    name: string
}

export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [skills, setSkills] = useState<Skill[]>([])

    function handleNewSkill() {
        if (newSkill === '') {
            return null
        }
        const data: Skill = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        setSkills(oldState => [...oldState, data])
        setNewSkill('')
    }

    function handleRemoveSkill(id: string) {
        setSkills(oldState => oldState.filter(skill => skill.id !== id));
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <Text style={styles.title} testID="welcome">Bem vindo</Text>
            <Text style={[styles.title, { fontSize: 24 }]}>Nos diga suas habilidades:</Text>
            <TextInput style={styles.input} placeholder="Nova habilidade" placeholderTextColor="#999" value={newSkill} onChangeText={setNewSkill} testID="inputNewSkill" />
            <Button onPress={handleNewSkill} testID="button-add">Adicionar</Button>
            {skills.length ? (
                <>
                    <Text style={[styles.title, { marginTop: 24, fontSize: 20 }]}>Minhas Habilidades:</Text>
                    <FlatList
                        testID="skillsList"
                        data={skills}
                        keyExtractor={item => item.id}
                        keyboardShouldPersistTaps="never"
                        renderItem={({ item }) => (
                            <View style={styles.skillArea}>
                                <View style={styles.skills}>
                                    <Text style={styles.skill}>{item.name}</Text>
                                </View>
                                <View style={styles.closeButtonArea}>
                                    <Text>
                                        <Button style={styles.closeButton} onPress={() => handleRemoveSkill(item.id)}>
                                            <Text style={styles.textCloseButton}>X</Text>
                                        </Button>
                                    </Text>
                                </View>
                            </View>
                        )}
                    />
                    <Button onPress={() => setSkills([])} style={{ backgroundColor: '#f76adb' }}>Limpar</Button>
                </>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    title: {
        color: '#FDFDFD',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FDFDFD',
        fontSize: 16,
        padding: 16,
        borderRadius: 8
    },
    skillArea: {
        backgroundColor: '#1F1E25',
        padding: 8,
        marginBottom: 8,
        flexDirection: 'row'
    },
    skills: {
        flex: 7,
    },
    closeButtonArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    skill: {
        fontSize: 14,
        color: '#FDFDFD',
        lineHeight: 32,
        paddingHorizontal: 10
    },
    closeButton: {
        height: 30,
        width: 30,
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff6060',
        borderRadius: 48,
        opacity: 0.85
    },
    textCloseButton: {
        fontSize: 12
    }
})