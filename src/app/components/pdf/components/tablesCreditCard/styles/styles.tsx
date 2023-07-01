import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  table: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    backgroundColor: "#f2f2f2",
    padding: 2,
  },
  tableHeaderShort: {
    textAlign: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    width: "9%",
    borderRightWidth: 1,
    borderColor: "#000",
    backgroundColor: "#f2f2f2",
  },
  tableData: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "9%",
    borderRightWidth: 1,
    borderColor: "#000",
  },
  dataCells: {
    fontSize: 6,
    padding: 5,
    textAlign: "center",
  },
});

export default styles;
