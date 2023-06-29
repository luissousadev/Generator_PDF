import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const BORDER_COLOR = "#000";
const BORDER_STYLE = "solid";
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
    borderBottomWidth: 1,
    borderColor: "#000",
    backgroundColor: "#f2f2f2",
    padding: 2,
    fontWeight: "bold",
  },
  tableHeaderShort: {
    alignItems: "flex-end",
    width: "9%",
    flexDirection: "row",
    borderRightWidth: 1,
    borderColor: "#000",
    backgroundColor: "#f2f2f2",
    padding: 5,
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 5,
  },
  tableCell: {
    flex: 1,
    fontSize: 10,
    padding: 5,
  },
  tableCellExtraSmall: {
    flex: 1,
    alignItems: "flex-end",
    fontSize: 7,
    padding: 2,
  },
});

const Table: React.FC<TableProps> = ({ children }) => (
  <View style={[styles.table, { width: "63%%", alignSelf: "flex-end" }]}>
    {children}
  </View>
);

const TableEmprestimosBancarios: React.FC<TableProps> = ({ children }) => (
  <View style={[styles.table, { width: "85%" }]}>{children}</View>
);

const TableCell: React.FC<TableCellProps> = ({ children }) => (
  <Text style={styles.tableCell}>{children}</Text>
);

const TableCellSmall: React.FC<TableCellProps> = ({ children }) => (
  <Text style={styles.tableCellExtraSmall}>{children}</Text>
);

interface TableProps {
  children: React.ReactNode;
}

interface TableCellProps {
  children: React.ReactNode;
}

const MyDocument = () => (
  <Document pageMode="fullScreen">
    <Page size="A3" style={styles.page}>
      <Text style={styles.tableTitle}> EMPRÉSTIMOS BANCÁRIOS</Text>

      <View>
        <TableEmprestimosBancarios>
          <View style={styles.tableHeader}>
            <TableCell>CONTRATOS ATIVOS E SUSPENSOS*</TableCell>
          </View>

          <View
            style={{ flexDirection: "row", backgroundColor: "red", height: 56 }}
          >
            <View style={styles.tableHeaderShort}>
              <TableCellSmall>CONTRATO</TableCellSmall>
            </View>
            <View style={styles.tableHeaderShort}>
              <TableCellSmall>BANCO</TableCellSmall>
            </View>
            <View style={styles.tableHeaderShort}>
              <TableCellSmall>SITUAÇÃO</TableCellSmall>
            </View>
            <View style={styles.tableHeaderShort}>
              <TableCellSmall>ORIGEM DA AVERBAÇÃO</TableCellSmall>
            </View>
            <View style={styles.tableHeaderShort}>
              <TableCellSmall>DATA INCLUSÃO</TableCellSmall>
            </View>

            <View
              style={{
                backgroundColor: "#f2f2f2",
                width: "15%",
              }}
            >
              <View style={{ borderBottom: 1 }}>
                <Text
                  style={{
                    alignSelf: "center",

                    fontSize: 7,
                    padding: 2,
                  }}
                >
                  COMPETÊNCIA
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  height: "100%",
                  backgroundColor: "green",
                }}
              >
                <View
                  style={{
                    borderRight: 1,
                    width: "50%",
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 7,
                      padding: 2,
                      backgroundColor: "purple",
                    }}
                  >
                    INÍCIO DE DESCONTO
                  </Text>
                </View>

                <View style={{ width: "50%" }}>
                  <Text
                    style={{
                      fontSize: 7,
                      padding: 2,
                      flex: 1,
                    }}
                  >
                    FIM DE DESCONTO
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* <View style={styles.tableHeader}>
            <TableCell>CONTRATO</TableCell>
            <TableCell>BANCO</TableCell>
            <TableCell>SITUAÇÃO</TableCell>
            <TableCell>ORIGEM DA AVERBAÇÃO</TableCell>
            <TableCell>DATA INCLUSÃO</TableCell>
            <TableCell>DATA INCLUSÃO</TableCell>
          </View> */}
        </TableEmprestimosBancarios>
      </View>
    </Page>

    <Page size="A3" style={styles.page}>
      <View style={styles.title}>
        <Text>Histórico de</Text>
        <Text>Empréstimo Consignado</Text>
      </View>
      <View style={styles.title}>
        <Text>_____________________________________</Text>
      </View>

      <View>
        <Text>Nome Completo</Text>
      </View>

      {/* Painel Benefícios */}
      <View style={styles.titleTablePanel}>
        <Text>Beneficio</Text>
      </View>
      <View style={styles.panelBeneficio}>
        <Text style={{ color: "blue" }}>
          Tipo de Beneficio (Aposentadoria pro invalidez)
        </Text>

        <View style={styles.columnsPanel}>
          <View style={{ width: "50%", padding: "2" }}>
            <Text>Nº Benefício</Text>
            <Text>Situação</Text>
            <Text>Pago em</Text>
            <Text>Meio </Text>
            <Text>Agência</Text>
            <Text>Conta Corrente</Text>
          </View>

          <View style={{ width: "50%" }}>
            <Text>Não possui procurador</Text>
            <Text>Não possui representante legal</Text>
            <Text>Não é pensão alimentícia</Text>
            <Text>Liberado para empréstimo </Text>
            <Text>Elegível para empréstimos</Text>
          </View>
        </View>
      </View>

      {/* Painel Resumo Financeiro */}
      <View style={styles.titleTablePanel}>
        <Text>Beneficio</Text>
      </View>

      <View style={[styles.panelEmprestimo]}>
        <View style={{ flexDirection: "row" }}>
          <Table>
            <View style={styles.tableHeader}>
              <TableCell>BASE DE CÁLCULO </TableCell>
            </View>
            <View style={styles.tableHeader}>
              <TableCell>MARGEM CONSIGNÁVEL* </TableCell>
            </View>
            <View style={styles.tableHeader}>
              <TableCell>MARGEM UTILIZADA </TableCell>
            </View>
            <View style={styles.tableHeader}>
              <TableCell>MARGEM RESERVADA** </TableCell>
            </View>
            <View style={styles.tableHeader}>
              <TableCell>MARGEM DISPONÍVEL </TableCell>
            </View>
            <View style={styles.tableHeader}>
              <TableCell>MARGEM EXTRAPOLADA** </TableCell>
            </View>
          </Table>

          <Table>
            <View style={styles.tableHeader}>
              <TableCell>EMPRÉSTIMOS </TableCell>
              <TableCell>RMC</TableCell>
              <TableCell>RCC</TableCell>
            </View>
            <View style={styles.tableRow}>
              <TableCell>DATA</TableCell>
              <TableCell>DATA</TableCell>
              <TableCell>DATA</TableCell>
            </View>
            <View style={styles.tableRow}>
              <TableCell>DATA</TableCell>
              <TableCell>DATA</TableCell>
              <TableCell>DATA</TableCell>
            </View>
            <View style={styles.tableRow}>
              <TableCell>DATA</TableCell>
              <TableCell>DATA</TableCell>
              <TableCell>DATA</TableCell>
            </View>
            <View style={styles.tableRow}>
              <TableCell>DATA</TableCell>
              <TableCell>DATA</TableCell>
              <TableCell>DATA</TableCell>
            </View>
            <View style={styles.tableRow}>
              <TableCell>DATA</TableCell>
              <TableCell>DATA</TableCell>
              <TableCell>DATA</TableCell>
            </View>
            <View style={styles.tableRow}>
              <TableCell>DATA</TableCell>
              <TableCell>DATA</TableCell>
              <TableCell>DATA</TableCell>
            </View>
          </Table>
        </View>

        <Text style={styles.SmallFont}>
          A margem consignável atual representa 45% da base de cálculo para
          empréstimos. Dessa margem, 35% é para empréstimos e 10% para cartão,
          sendo 5% para RMC e 5% para RCC.
        </Text>
        <Text style={styles.SmallFont}>
          ** O valor da margem reservada está incluído no valor da margem
          utilizada.
        </Text>
        <Text style={styles.SmallFont}>
          *** A margem extrapolada representa o valor que excedeu a margem
          disponível, que pode ocorrer em situações específicas como a redução
          da renda do benefício
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
