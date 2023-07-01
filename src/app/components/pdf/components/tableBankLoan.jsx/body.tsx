import { Text, View } from "@react-pdf/renderer";
import styles from "../../styles";

import { TableCellSmall } from "../tableCells";

interface TableBankLoanBodyProps {
  data: any;
}

const formatarValorParaReal = (valor: any) => {
  const numeroFormatado = parseFloat(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  return numeroFormatado;
};

const TableBankLoanBody: React.FC<TableBankLoanBodyProps> = ({ data }) => (
  <View>
    <View>
      <View style={[styles.table, { width: "100%" }]}>
        <View style={{ flexDirection: "row", height: 44 }}>
          <View style={[styles.tableData, { textAlign: "center", width: 90 }]}>
            <Text style={styles.dataCells}>{data.numeroContrato}</Text>
          </View>
          <View style={styles.tableData}>
            <Text style={styles.dataCells}>
              {data.codigoBanco} - {data.nomeBanco}
            </Text>
          </View>
          <View style={[styles.tableData, { width: 55 }]}>
            <Text style={styles.dataCells}>{data.situacao}</Text>
          </View>
          <View style={[styles.tableData, { width: 65 }]}>
            <Text style={styles.dataCells}>????</Text>
          </View>
          <View style={[styles.tableData, { width: 55 }]}>
            <Text style={styles.dataCells}>{data.dataAverbacao}</Text>
          </View>

          <View
            style={[
              styles.tableData,
              {
                width: 125,
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                height: "100%",
              }}
            >
              <View
                style={[
                  styles.tableData,
                  {
                    borderRight: 1,
                    width: 70,
                  },
                ]}
              >
                <Text style={styles.dataCells}>{data.competenciaInicio}</Text>
              </View>

              <View style={[styles.tableData, { width: 70, borderRight: 1 }]}>
                <Text style={styles.dataCells}>{data.competenciaFim}</Text>
              </View>
            </View>
          </View>

          <View style={[styles.tableData, { width: "10%" }]}>
            <Text style={styles.dataCells}>{data.qtdParcelas}</Text>
          </View>

          <View
            style={{
              width: "30%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                height: "100%",
              }}
            >
              <View
                style={[
                  styles.tableData,
                  {
                    width: 37,
                  },
                ]}
              >
                <Text style={[styles.dataCells]}>
                  {formatarValorParaReal(data.valorParcela)}
                </Text>
              </View>

              <View
                style={[
                  styles.tableData,
                  {
                    width: 37,
                  },
                ]}
              >
                <Text style={[styles.dataCells]}>???</Text>
              </View>

              <View
                style={[
                  styles.tableData,
                  {
                    width: 55,
                  },
                ]}
              >
                <Text style={styles.dataCells}>
                  {formatarValorParaReal(data.valorEmprestado)}
                </Text>
              </View>

              <View
                style={[
                  styles.tableData,
                  {
                    width: 60,
                  },
                ]}
              >
                <Text style={styles.dataCells}>???</Text>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.tableData,
              {
                width: 240,
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                height: "100%",
              }}
            >
              <View
                style={[
                  styles.tableData,
                  {
                    width: 50,
                  },
                ]}
              >
                <Text style={styles.dataCells}>---</Text>
              </View>

              <View
                style={[
                  styles.tableData,
                  {
                    width: 50,
                  },
                ]}
              >
                <Text style={styles.dataCells}>---</Text>
              </View>

              <View
                style={[
                  styles.tableData,
                  {
                    width: 56,
                  },
                ]}
              >
                <Text style={styles.dataCells}>---</Text>
              </View>

              <View
                style={[
                  styles.tableData,
                  {
                    width: 47,
                    border: "none",
                  },
                ]}
              >
                <Text style={styles.dataCells}>---</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default TableBankLoanBody;
