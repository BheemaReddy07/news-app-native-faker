import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import generateFakeNews from '../data/fake-news'
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '../components/ListItem';

const LatestNews = () => {
    const news = generateFakeNews(4);
    console.log(news)
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

export default LatestNews

const styles = StyleSheet.create({})