import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../theme/colors";
import { headlines, newsPosts } from "../data/mock";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import StatusPill from "../components/StatusPill";

export default function NewsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Top Story" actionLabel="Highlights" />
      <Card style={styles.featuredCard}>
        <View style={styles.featuredHeader}>
          <StatusPill label={headlines[0].tag} tone="accent" />
          <Text style={styles.featuredTime}>Updated 15m ago</Text>
        </View>
        <Text style={styles.featuredTitle}>{headlines[0].title}</Text>
        <Text style={styles.featuredSummary}>{headlines[0].summary}</Text>
        <Pressable style={styles.featuredButton}>
          <Text style={styles.featuredButtonText}>Read full recap</Text>
        </Pressable>
      </Card>

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
  featuredCard: {
    gap: 10
  },
  featuredHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  featuredTime: {
    color: colors.textMuted,
    fontSize: 12
  },
  featuredTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: "700"
  },
  featuredSummary: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18
  },
  featuredButton: {
    alignSelf: "flex-start",
    backgroundColor: colors.surfaceHighlight,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999
  },
  featuredButtonText: {
    color: colors.accentStrong,
    fontSize: 12,
    fontWeight: "600"
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
    color: colors.accentStrong,
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
