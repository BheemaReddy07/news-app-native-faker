import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, MD3Colors } from 'react-native-paper'

const ListItem = ({ id, title, content, image, author, date }) => {
    return (

        <Card style={styles.container}>
            <Card.Cover source={{ uri: image }} />
            <Card.Title style={styles.date} title={new Date(date).toLocaleDateString()} />
            <Card.Title title={title} />
            <Card.Content>
                <Text variant="titleLarge">{content}</Text>
            </Card.Content>
        </Card>
    )
}
export default ListItem

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10
    },
    date: {
        color: MD3Colors.neutral95
    }
})








