import * as React from "react";
import { useEffect, useState } from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "react-native";
import axios from "axios";

const Staff = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const getNews = () => { // obter notícias do ficheiro guardado no GitHub
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
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <ScrollView>
          <StatusBar backgroundColor="darkred" barStyle="dark-content" />
          <ScrollView>
            <View style={{ flexDirection: "row", marginLeft: 5 }}>
              <View>
                <Text style={styles.equipaModalidade}>CEO</Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/teo.png")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  RAMIRO 'TEODOSIUS' TEODOSIO
                </Text>
              </View>

              <View style={{ marginLeft: 35 }}>
                <Text style={styles.equipaModalidade}>
                  HEAD OF SOCIAL MEDIA
                </Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/ofarinha.jpg")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  PEDRO 'OFARINHA' FARINHA
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 5 }}>
              <View>
                <Text style={styles.equipaModalidade}>ESPORTS MANAGER</Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/smankey.png")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  DIOGO 'SMANKEYL1VE' CURADO
                </Text>
              </View>

              <View style={{ marginLeft: 35 }}>
                <Text style={styles.equipaModalidade}>MANAGER CS:GO</Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/sp3kan.png")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  TELMO '-SP3KAN-' FLORES
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 5 }}>
              <View>
                <Text style={styles.equipaModalidade}>TWITCH MANAGER</Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/GUGGASPT.png")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  GONCALO 'GUGGASPT' ALMAS
                </Text>
              </View>

              <View style={{ marginLeft: 45 }}>
                <Text style={styles.equipaModalidade}>MANAGER FIFA</Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/jpedro.png")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  JOAO 'JPEDRO17' JESUS
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 5 }}>
              <View>
                <Text style={styles.equipaModalidade}>DIRETOR DE IMAGEM</Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/medjay.png")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  DANIEL 'SIRMEDJAY' GUERREIRO
                </Text>
              </View>

              <View style={{ marginLeft: 35 }}>
                <Text style={styles.equipaModalidade}>FOTOGRAFO</Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/indy.png")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  VASCO 'INDY' NASCIMENTO
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 5 }}>
              <View>
                <Text style={styles.equipaModalidade}>DESIGNER</Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/voltic.png")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  FABIO 'VOLTIC' BARBOSA
                </Text>
              </View>

              <View style={{ marginLeft: 55 }}>
                <Text style={styles.equipaModalidade}>STAFF</Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/galvao.png")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  JOSE 'PROFGALVAO' GALVAO
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 5 }}>
              <View>
                <Text style={styles.equipaModalidade}>FOTOGRAFO</Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/franjinha.png")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  GABRIEL 'FRANJINHA' LEMOS
                </Text>
              </View>

              <View style={{ marginLeft: 45 }}>
                <Text style={styles.equipaModalidade}>STAFF</Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/fixy.png")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  JOAO 'FIXY' SERRA
                </Text>
              </View>
            </View>

            <View
              style={{ flexDirection: "row", marginLeft: 5, marginBottom: 25 }}
            >
              <View>
                <Text style={styles.equipaModalidade}>STAFF LOL</Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/tenma.png")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  FLAVIO 'TENMA' ALMEIDA
                </Text>
              </View>

              <View style={{ marginLeft: 45 }}>
                <Text style={styles.equipaModalidade}>MANAGER LOL</Text>
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 120,
                    height: 120,
                  }}
                  source={require("../assets/staff/elvira_v2.png")}
                />
                <Text style={{ marginTop: 5, color: "white", fontSize: 10 }}>
                  ELVIRA 'ELV' RIBEIRO
                </Text>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};

export default Staff;

const styles = StyleSheet.create({
  equipaModalidade: {
    color: "darkred",
    marginTop: 10,
    marginLeft: 5,
  },
});
