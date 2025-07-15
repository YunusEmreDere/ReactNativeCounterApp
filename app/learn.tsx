import { learnData } from "@/components/learnData";
import {
    Dimensions,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function LearnScreen() {
  const handlePress = (link: string) => {
    Linking.openURL(link);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {learnData.map((section) => (
        <View key={section.category} style={styles.section}>
          <Text style={styles.header}>{section.category}</Text>
          <View style={styles.row}>
            {section.items.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() => handlePress(item.link)}
              >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const screenWidth = Dimensions.get("window").width;
const cardMargin = 14;
const cardWidth = (screenWidth - cardMargin * 3) / 2;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingBottom: 40,
    backgroundColor:"white"
  },
  section: {
    marginBottom: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#F7FAFC",
    padding: 24,
    borderRadius: 12,
    marginBottom: 12,
    width: cardWidth,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00695c",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#333",
  },
});
