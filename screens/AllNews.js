import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import generateFakeNews from '../data/fake-news'

const AllNews = () => {
    const news = generateFakeNews(50);
    return (

        <SafeAreaView>
            <FlatList
                data={news}
                keyExtractor={(item) => item.id}
                renderItem={(iter) => <ListItem {...iter.item} />}
            />
        </SafeAreaView>

    )
}

export default AllNews

const styles = StyleSheet.create({})