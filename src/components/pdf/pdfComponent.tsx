import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 14,
    paddingTop: 35,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 65,
  },
  title: {
    fontSize: 24,
    textAlign: "justify",
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 18,
    textAlign: "justify",
    marginBottom: 10,
    marginTop: 20,
    textDecoration: "underline",
    fontWeight: 900,
  },
  content: {
    textAlign: "justify",
    marginBottom: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  list: {
    textAlign: "justify",
    marginBottom: 3,
    marginLeft: 5,
  },
  pointList: {
    fontSize: 20,
    textAlign: "justify",
    marginBottom: 3,
    marginLeft: 5,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.title}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.title}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
