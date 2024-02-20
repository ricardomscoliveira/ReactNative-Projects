import * as React from "react";
import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Linking } from "react-native";
import { StatusBar } from "react-native";
import axios from "axios";
import Article from "../components/Article";
import { TouchableOpacity } from "react-native-gesture-handler";

const Noticias = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/MrKennyPT/news/main/top-headlines.json",
        {
          /*onde estão armezanadas as notícias*/
        },
        {}
      )
      .then((response) => {
        // handle success
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar backgroundColor="darkred" barStyle="dark-content" />

      <View style={styles.container}>
        <FlatList
          data={articles}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>{Linking.openURL(item.urlToArticle)}}>
              <Article
                urlToArticle={item.urlToArticle}
                urlToImage={item.urlToImage}
                title={item.title}
                description={item.description}
                publishedAt={item.publishedAt}
                sourceName={item.author}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
};

export default Noticias;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
