import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, MD3Colors } from 'react-native-paper'
import { AppScreens } from '../utils/constants'

const ListItem = ({ id, title, content, image, author, date, navigation }) => {
    const onPressNews = () => {
        navigation.navigate(AppScreens.NewsItem, {
            id, title, author, date, image, content
        })
    }

    return (
        <Card onPress={onPressNews} style={styles.container}>
            <Card.Cover source={{ uri: image }} />
            <Card.Title titleStyle={styles.date} title={new Date(date).toLocaleDateString()} />
            <Card.Title titleStyle={{fontSize:20,fontWeight:"bold"}} title={title} />
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
        color:"#A9A9A9"
    }
})








