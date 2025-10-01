import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Карточка */}
      <View style={styles.card}>
        {/* Аватар */}
        <Image
          style={styles.avatar}
          source={{
            uri: "https://sun9-50.userapi.com/s/v1/ig2/vJsgQpgNa7pK78mJkpAw1G3YH20U_l40WSrgtOzFf1iTbhWMrB6AkObRAHuNjasHhnxDxLT_JeqgBCLAMWo8wQ-F.jpg?size=200x200&quality=95&crop=502,182,1558,1558&ava=1",
          }}
        />

        {/* Информация о пользователе */}
        <View style={styles.textContainer}>
          <Text style={styles.name}>Софья Тумаркина</Text>
          <Text style={styles.title}>Графический дизайнер</Text>
          <Text style={styles.bio}>
            Люблю создавать красоту, психолгию и эзотерику. Занимаюсь дизайном более 2-х лет.
          </Text>
        </View>

        {/* Навыки */}
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>Adobe Photoshop</Text>
          <Text style={styles.skill}>Adobe Illustrator</Text>
          <Text style={styles.skill}>UI/UX</Text>
          <Text style={styles.skill}>Figma</Text>
          <Text style={styles.skill}>Adobe InDesign</Text>
        </View>

        {/* Кнопка */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Подписаться</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: "#636363",
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
    justifyContent: "center",
  },
  skill: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: "#e0e0e0",
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
