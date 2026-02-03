import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../theme/colors";
import { newsPosts } from "../data/mock";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function NewsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="News & Media" actionLabel="Highlights" />
      <View style={styles.stack}>
        {newsPosts.map((news) => (
          <Card key={news.id} style={styles.card}>
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.summary}>{news.summary}</Text>
            <View style={styles.footer}>
              <Text style={styles.time}>{news.time}</Text>
              <Pressable style={styles.tag}>
                <Text style={styles.tagText}>Read</Text>
              </Pressable>
            </View>
          </Card>
        ))}
      </View>

      <SectionHeader title="Media" actionLabel="Gallery" />
      <Card style={styles.mediaCard}>
        <Text style={styles.title}>Photos & Highlights</Text>
        <Text style={styles.summary}>
          Short-form highlight videos and galleries will appear here with rich media cards.
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  content: {
    padding: 20,
    paddingBottom: 40
  },
  stack: {
    gap: 12
  },
  card: {
    gap: 8
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "600"
  },
  summary: {
    color: colors.textSecondary,
    fontSize: 13
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  time: {
    color: colors.accent,
    fontSize: 12
  },
  tag: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 4
  },
  tagText: {
    color: colors.textPrimary,
    fontSize: 12
  },
  mediaCard: {
    marginTop: 12,
    gap: 8
  }
});
