import { Text, View } from "@react-pdf/renderer";
import styles from "./styles/styles";
import { TableCell, TableCellSmall } from "../tableCells";

const TablesCreditCardHeader: React.FC = () => (
  <View style={[styles.table, { width: "94%" }]}>
    <View style={styles.tableHeader}>
      <TableCell>CONTRATOS ATIVOS E SUSPENSOS*</TableCell>
    </View>

    <View style={{ flexDirection: "row", height: 44 }}>
      <View style={[styles.tableHeaderShort, { textAlign: "center" }]}>
        <TableCellSmall>CONTRATO</TableCellSmall>
      </View>
      <View style={[styles.tableHeaderShort, { width: 80 }]}>
        <TableCellSmall>BANCO</TableCellSmall>
      </View>
      <View style={[styles.tableHeaderShort, { width: 65 }]}>
        <TableCellSmall>SITUAÇÃO</TableCellSmall>
      </View>
      <View style={[styles.tableHeaderShort, { width: 75 }]}>
        <TableCellSmall>ORIGEM DA{"\n"} AVERBAÇÃO</TableCellSmall>
      </View>
      <View style={[styles.tableHeaderShort, { width: 65 }]}>
        <TableCellSmall>DATA{"\n"} INCLUSÃO</TableCellSmall>
      </View>

      <View
        style={{
          backgroundColor: "#f2f2f2",
          width: 120,
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
            VALOR
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            height: "100%",
          }}
        >
          <View
            style={{
              borderRight: 1,
              width: 60,
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 7,
                padding: 2,
                flex: 1,
                textAlign: "center",
              }}
            >
              LIMITE DE CARTÃO
            </Text>
          </View>

          <View
            style={{
              width: 60,
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 7,
                padding: 2,
                flex: 1,
                textAlign: "center",
              }}
            >
              RESERVADO
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#f2f2f2",
          width: 280,
        }}
      >
        <View style={{ borderBottom: 1, borderLeft: 1 }}>
          <Text
            style={{
              alignSelf: "center",

              fontSize: 7,
              padding: 2,
            }}
          >
            DATA
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            height: "100%",
          }}
        >
          <View
            style={{
              borderRight: 1,
              borderLeft: 1,
              width: 70,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 7,
                padding: 2,
              }}
            >
              SUSPENSÃO{"\n"}BANCO
            </Text>
          </View>

          <View
            style={{
              borderRight: 1,
              width: 70,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 7,
                padding: 2,
                textAlign: "center",
              }}
            >
              SUSPENSÃO{"\n"} INSS
            </Text>
          </View>

          <View
            style={{
              borderRight: 1,
              width: 70,
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 7,
                padding: 2,
                textAlign: "center",
              }}
            >
              REATIVAÇÃO{"\n"}BANCO
            </Text>
          </View>

          <View
            style={{
              width: 70,
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 7,
                padding: 2,
                textAlign: "center",
              }}
            >
              REATIVAÇÃO{"\n"}INSS
            </Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default TablesCreditCardHeader;
