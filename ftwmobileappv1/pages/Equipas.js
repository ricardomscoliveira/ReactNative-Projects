import * as React from "react";
import { useEffect, useState } from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "react-native";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";

const Equipas = ({ navigation }) => {
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
      <ScrollView>
        <StatusBar backgroundColor="darkred" barStyle="dark-content" />
        <Text style={styles.equipaModalidade}>CS:GO</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>LOL</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftw_evo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>Hearthstone</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>FIFA</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>Rocket League</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftw_evo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>Pokemon TCG</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>COD</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>Brawl Stars</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftw_evo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>MTG Arena</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftw_evo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>Teamfight Tactics</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>Cosplay</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>IRacing</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>F1</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>Free Fire</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>CoC</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.equipaModalidade}>Valorant</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/ftwlogo.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Equipas;

const styles = StyleSheet.create({
  equipaModalidade: {
    color: "darkred",
    marginTop: 10,
    marginLeft: 10,
  },
});
