import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 14,
    paddingTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 65,
  },
  title: {
    fontSize: 24,
    textAlign: "justify",
    marginBottom: 30,
  },
  titleTablePanel: {
    fontSize: 16,
    fontWeight: 900,
    backgroundColor: "#c8c8c8",
  },
  panelBeneficio: {
    border: 3,
    borderColor: "#c8c8c8",
    padding: 20,
    marginBottom: 12,
  },
  panelEmprestimo: {
    border: 3,
    borderColor: "#c8c8c8",
    paddingHorizontal: 70,
    paddingVertical: 20,
    marginBottom: 12,
  },
  columnsPanel: {
    flexDirection: "row",
  },
  subTitle: {
    fontSize: 18,
    textAlign: "justify",
    marginBottom: 10,
    marginTop: 20,
    textDecoration: "underline",
    fontWeight: 900,
  },
  tableTitle: {
    fontSize: 20,
  },
  SmallFont: {
    fontSize: 12,
  },
  rowView: {
    display: "flex",
    flexDirection: "row",
    borderTop: "1px solid #EEE",
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: "center",
  },

  table: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
  },
  tableHeader: {
    flexDirection: "row",
    height: 32,
    borderBottomWidth: 1,
    borderColor: "#000",
    backgroundColor: "#f2f2f2",
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "9%",
    borderRightWidth: 1,
    borderColor: "#000",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#000",
    height: 32,
  },
  dataCells: {
    fontSize: 7,
    textAlign: "center",
  },
  tableCell: {
    fontSize: 10,
    paddingTop: 7,
    alignSelf: "flex-end",
  },
  tableCellExtraSmall: {
    flex: 1,
    alignItems: "flex-end",
    fontSize: 7,
    padding: 2,
  },
});

export default styles;
