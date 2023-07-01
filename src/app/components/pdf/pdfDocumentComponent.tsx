import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import styles from "./styles";
import { TableCell, TableCellSmall } from "./components/tableCells";
import TableBankLoan from "./components/tableBankLoan.jsx/tableBankLoan";
import { TablesCreditCard } from "./components/tablesCreditCard/tablesCreditCard";

const Table: React.FC<TableProps> = ({ children }) => (
  <View style={[styles.table, { width: "63%%", alignSelf: "flex-end" }]}>
    {children}
  </View>
);

interface TableProps {
  children: React.ReactNode;
}

const datasTeste = {
  listaDadosPessoais: {
    nb: "1206046144",
    cpf: "37892061649",
    ddb: "2002-04-02",
    nome: "TARCISIO DAS MERCES SILVA",
    dt_nascimento: "1954-09-24",
    idade: 68,
    sexo: "MASCULINO",
    uf: "MG",
    cidade: "BARAO DE COCAIS",
    endereco: "RUA MARIA BERNARDINA         128",
    bairro: "LAGOA",
    cep: "35970000",
  },
  listaDadosBeneficio: {
    beneficio: "1206046144",
    especie: "92 - APOSENTADORIA INVALIDEZ - ACIDENTE DO TRABALHO",
    situacao: "ATIVO",
    pensao: "N\u00c3O",
    representanteLegal: "N\u00c3O",
    elegivel: "SIM",
    bloqueioEmprestimo: "N\u00c3O",
    valorMargemDisponivelRCC: 207.72,
    valorMargemDisponivel: 31.59,
    valorMargemDisponivelRMC: 0,
    basedeCalculo: 4154.42,
  },
  listaDadosBancario: {
    nomeBanco: "BANCO BRADESCO S A",
    codigoBanco: 237,
    agencia: 2483,
    cc: "0000016292",
    tipoMeioPagamento: "Conta Corrente",
  },
  listaRMC: [
    {
      situacao: "Ativo",
      nomeBanco: "BANCO BMG S A",
      valor: 153.04,
      codigoBanco: "318",
      dataInclusao: "03/02/2017",
      numeroEmprestimo: "11490589",
      limite: 3610,
      "tipo emprestimo": 76,
    },
  ],
  listaEmprestimos: [
    {
      nomeBanco: "BANCO DAYCOVAL S A",
      codigoBanco: "707",
      dataAverbacao: "26/05/2023",
      numeroContrato: "55-013554822/23",
      valorEmprestado: 48216,
      valorParcela: 574,
      qtdParcelas: 84,
      situacao: "Ativo",
      competenciaInicio: "06/2023",
      competenciaFim: "05/2030",
      tipo_emprestimo: 98,
    },
    {
      nomeBanco: "BANCO BRADESCO S A",
      codigoBanco: "237",
      dataAverbacao: "03/04/2023",
      numeroContrato: "0123477948456",
      valorEmprestado: 2357.52,
      valorParcela: 58.13,
      qtdParcelas: 84,
      situacao: "Ativo",
      competenciaInicio: "04/2023",
      competenciaFim: "03/2030",
      tipo_emprestimo: 98,
    },
    {
      nomeBanco: "BANCO INBURSA SA",
      codigoBanco: "12",
      dataAverbacao: "22/03/2023",
      numeroContrato: "202303091005943",
      valorEmprestado: 2921.01,
      valorParcela: 73.16,
      qtdParcelas: 69,
      situacao: "Ativo",
      competenciaInicio: "04/2023",
      competenciaFim: "12/2028",
      tipo_emprestimo: 98,
    },
    {
      nomeBanco: "BANCO INBURSA SA",
      codigoBanco: "12",
      dataAverbacao: "20/03/2023",
      numeroContrato: "202303071004276",
      valorEmprestado: 2943.98,
      valorParcela: 71.82,
      qtdParcelas: 73,
      situacao: "Ativo",
      competenciaInicio: "04/2023",
      competenciaFim: "04/2029",
      tipo_emprestimo: 98,
    },
    {
      nomeBanco: "BANCO BRADESCO S A",
      codigoBanco: "237",
      dataAverbacao: "28/02/2023",
      numeroContrato: "0123476213838",
      valorEmprestado: 929.61,
      valorParcela: 24.29,
      qtdParcelas: 60,
      situacao: "Ativo",
      competenciaInicio: "03/2023",
      competenciaFim: "02/2028",
      tipo_emprestimo: 98,
    },
    {
      nomeBanco: "BANCO BRADESCO S A",
      codigoBanco: "237",
      dataAverbacao: "28/02/2023",
      numeroContrato: "0123476213128",
      valorEmprestado: 2204.63,
      valorParcela: 53.29,
      qtdParcelas: 69,
      situacao: "Ativo",
      competenciaInicio: "03/2023",
      competenciaFim: "11/2028",
      tipo_emprestimo: 98,
    },
    {
      nomeBanco: "BANCO SANTANDER OLE",
      codigoBanco: "33",
      dataAverbacao: "31/01/2023",
      numeroContrato: "264505259",
      valorEmprestado: 9324.88,
      valorParcela: 200,
      qtdParcelas: 84,
      situacao: "Ativo",
      competenciaInicio: "02/2023",
      competenciaFim: "01/2030",
      tipo_emprestimo: 98,
    },
    {
      nomeBanco: "BANCO ITAU CONSIGNADO SA",
      codigoBanco: "29",
      dataAverbacao: "19/01/2023",
      numeroContrato: "648230439",
      valorEmprestado: 9510.87,
      valorParcela: 220.4,
      qtdParcelas: 84,
      situacao: "Ativo",
      competenciaInicio: "02/2023",
      competenciaFim: "01/2030",
      tipo_emprestimo: 98,
    },
    {
      nomeBanco: "BANCO BRADESCO S A",
      codigoBanco: "237",
      dataAverbacao: "12/12/2022",
      numeroContrato: "0123471862504",
      valorEmprestado: 7477.93,
      valorParcela: 147.37,
      qtdParcelas: 84,
      situacao: "Ativo",
      competenciaInicio: "01/2023",
      competenciaFim: "12/2029",
      tipo_emprestimo: 98,
    },
  ],
};

const formatarValorParaReal = (valor: any) => {
  const numeroFormatado = parseFloat(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  return numeroFormatado;
};

const calculatePercentage35 = (valor: any) => {
  const porcentagem = 35;
  return (porcentagem / 100) * valor;
};

const calculatePercentage5 = (valor: any) => {
  const porcentagem = 5;
  return (porcentagem / 100) * valor;
};

const calculateUsedMargin = (base: any, available: any) => {
  const consignable = calculatePercentage35(base);
  const usedMargin = consignable - available;
  return usedMargin;
};

const calculateUsedMarginCard = (base: any, available: any) => {
  const consignable = calculatePercentage5(base);
  const usedMargin = consignable - available;
  return usedMargin;
};

const calculateExtrapoledMargin = (base: any, available: any) => {
  const consignable = calculatePercentage35(base);
  const usedMargin = calculateUsedMargin(base, available);
  if (usedMargin < consignable) return formatarValorParaReal(0);

  const extrapoleMargin = usedMargin - consignable;

  return formatarValorParaReal(extrapoleMargin);
};

const calculateExtrapoledMarginCard = (base: any, available: any) => {
  debugger;
  const consignable = calculatePercentage5(base);
  const usedMargin = calculateUsedMargin(consignable, available);
  if (usedMargin < consignable) return "---";

  const extrapoleMargin = usedMargin - consignable;

  return formatarValorParaReal(extrapoleMargin);
};

const MyDocument = (datas: any) => (
  <Document pageMode="fullScreen">
    <Page size="A3" style={styles.page}>
      <Text style={styles.tableTitle}> CARTÃO DE CRÉDITO</Text>
      <TablesCreditCard datas={datasTeste.listaRMC} />
      <Text style={[styles.SmallFont, { marginBottom: 40 }]}>
        *Contratos que comprometem a margem consignável
      </Text>
      <TablesCreditCard datas={datasTeste.listaRMC} />
      <Text style={styles.SmallFont}>
        *Contratos que comprometem a margem consignável
      </Text>
    </Page>
    <Page size="A3" style={styles.page}>
      <TableBankLoan datas={datasTeste.listaEmprestimos} />
      <Text style={styles.SmallFont}>
        *Contratos que comprometem a margem consignável
      </Text>
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
        <Text>{datasTeste.listaDadosPessoais.nome}</Text>
      </View>

      {/* Painel Benefícios */}
      <View style={styles.titleTablePanel}>
        <Text>Beneficio </Text>
      </View>
      <View style={styles.panelBeneficio}>
        <View style={{ width: 300, marginRight: 80, padding: "2" }}>
          <Text style={{ color: "blue", flexWrap: "nowrap" }}>
            {datasTeste.listaDadosBeneficio.especie}
          </Text>
        </View>

        <View style={styles.columnsPanel}>
          <View style={{ width: 300, marginRight: 80, padding: "2" }}>
            <Text>
              Nº Benefício:{" "}
              <Text>{datasTeste.listaDadosBeneficio.beneficio}</Text>
            </Text>
            <Text>
              Situação: <Text>{datasTeste.listaDadosBeneficio.situacao}</Text>
            </Text>
            <Text>
              Pago em: <Text>{datasTeste.listaDadosBancario.codigoBanco}</Text>{" "}
              - <Text>{datasTeste.listaDadosBancario.nomeBanco}</Text>
            </Text>
            <Text>
              Meio:{" "}
              <Text>{datasTeste.listaDadosBancario.tipoMeioPagamento}</Text>{" "}
            </Text>
            <Text>
              Agência: <Text>{datasTeste.listaDadosBancario.agencia}</Text>{" "}
            </Text>
            <Text>
              Conta Corrente: <Text>{datasTeste.listaDadosBancario.cc}</Text>
            </Text>
          </View>

          <View style={{ width: "50%" }}>
            {datasTeste.listaDadosBeneficio.representanteLegal === "NÃO" ? (
              <Text>Não possui representante legal</Text>
            ) : (
              <Text>Possui representante legal</Text>
            )}

            {datasTeste.listaDadosBeneficio.pensao === "NÃO" ? (
              <Text>Não é pensão alimentícia</Text>
            ) : (
              <Text>É pensão alimentícia</Text>
            )}

            {datasTeste.listaDadosBeneficio.bloqueioEmprestimo === "NÃO" ? (
              <Text>Liberado para empréstimo </Text>
            ) : (
              <Text>Não liberado para empréstimo </Text>
            )}

            {datasTeste.listaDadosBeneficio.elegivel === "SIM" ? (
              <Text>Elegível para empréstimos</Text>
            ) : (
              <Text>Não elegível para empréstimos</Text>
            )}
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
              <View
                style={{ width: 110, alignItems: "center", borderRight: 1 }}
              >
                <TableCell>EMPRÉSTIMOS </TableCell>
              </View>
              <View
                style={{ width: 110, alignContent: "center", borderRight: 1 }}
              >
                <TableCell>RMC</TableCell>
              </View>
              <View
                style={{ width: 110, alignContent: "center", borderRight: 1 }}
              >
                <TableCell>RCC</TableCell>
              </View>
            </View>
            {/**DataCells */}
            {/**EDITADA */}
            <View style={styles.tableRow}>
              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                {!!datasTeste.listaDadosBeneficio.basedeCalculo ? (
                  <TableCell>
                    {" "}
                    {formatarValorParaReal(
                      datasTeste.listaDadosBeneficio.basedeCalculo
                    )}
                  </TableCell>
                ) : (
                  <TableCell> ---</TableCell>
                )}
              </View>

              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                {!!datasTeste.listaDadosBeneficio.basedeCalculo ? (
                  <TableCell>
                    {" "}
                    {formatarValorParaReal(
                      datasTeste.listaDadosBeneficio.basedeCalculo
                    )}
                  </TableCell>
                ) : (
                  <TableCell> ---</TableCell>
                )}
              </View>

              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                {!!datasTeste.listaDadosBeneficio.basedeCalculo ? (
                  <TableCell>
                    {" "}
                    {formatarValorParaReal(
                      datasTeste.listaDadosBeneficio.basedeCalculo
                    )}
                  </TableCell>
                ) : (
                  <TableCell> ---</TableCell>
                )}
              </View>
            </View>

            <View style={styles.tableRow}>
              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                {!!datasTeste.listaDadosBeneficio.basedeCalculo ? (
                  <TableCell>
                    {" "}
                    {formatarValorParaReal(
                      calculatePercentage35(
                        datasTeste.listaDadosBeneficio.basedeCalculo
                      )
                    )}
                  </TableCell>
                ) : (
                  <TableCell> ---</TableCell>
                )}
              </View>

              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                {!!datasTeste.listaDadosBeneficio.basedeCalculo ? (
                  <TableCell>
                    {" "}
                    {formatarValorParaReal(
                      calculatePercentage5(
                        datasTeste.listaDadosBeneficio.basedeCalculo
                      )
                    )}
                  </TableCell>
                ) : (
                  <TableCell> ---</TableCell>
                )}
              </View>

              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                {!!datasTeste.listaDadosBeneficio.basedeCalculo ? (
                  <TableCell>
                    {" "}
                    {formatarValorParaReal(
                      calculatePercentage5(
                        datasTeste.listaDadosBeneficio.basedeCalculo
                      )
                    )}
                  </TableCell>
                ) : (
                  <TableCell> --- </TableCell>
                )}
              </View>
            </View>
            {/**Margem Utilizada */}
            <View style={styles.tableRow}>
              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                {!!datasTeste.listaDadosBeneficio.basedeCalculo ? (
                  <TableCell>
                    {" "}
                    {formatarValorParaReal(
                      calculateUsedMargin(
                        datasTeste.listaDadosBeneficio.basedeCalculo,
                        datasTeste.listaDadosBeneficio.valorMargemDisponivel
                      )
                    )}
                  </TableCell>
                ) : (
                  <TableCell> ---</TableCell>
                )}
              </View>

              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                {!!datasTeste.listaDadosBeneficio.basedeCalculo ? (
                  <TableCell>
                    {" "}
                    {formatarValorParaReal(
                      calculateUsedMarginCard(
                        datasTeste.listaDadosBeneficio.basedeCalculo,
                        datasTeste.listaDadosBeneficio.valorMargemDisponivelRMC
                      )
                    )}
                  </TableCell>
                ) : (
                  <TableCell> ---</TableCell>
                )}
              </View>

              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                {!!datasTeste.listaDadosBeneficio.basedeCalculo ? (
                  <TableCell>
                    {" "}
                    {formatarValorParaReal(
                      calculateUsedMarginCard(
                        datasTeste.listaDadosBeneficio.basedeCalculo,
                        datasTeste.listaDadosBeneficio.valorMargemDisponivelRCC
                      )
                    )}
                  </TableCell>
                ) : (
                  <TableCell> ---</TableCell>
                )}
              </View>
            </View>
            {/**Margem Reservada */}
            <View style={styles.tableRow}>
              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                <TableCell> {formatarValorParaReal(0)}</TableCell>
              </View>

              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                <TableCell> ---</TableCell>
              </View>

              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                <TableCell> ---</TableCell>
              </View>
            </View>
            {/**Margem Disponivel */}
            <View style={styles.tableRow}>
              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                {!!datasTeste.listaDadosBeneficio.valorMargemDisponivel ? (
                  <TableCell>
                    {" "}
                    {formatarValorParaReal(
                      datasTeste.listaDadosBeneficio.valorMargemDisponivel
                    )}
                  </TableCell>
                ) : (
                  <TableCell> ---</TableCell>
                )}
              </View>

              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                {!!datasTeste.listaDadosBeneficio.valorMargemDisponivelRMC ? (
                  <TableCell>
                    {" "}
                    {formatarValorParaReal(
                      datasTeste.listaDadosBeneficio.valorMargemDisponivelRMC
                    )}
                  </TableCell>
                ) : (
                  <TableCell> --- </TableCell>
                )}
              </View>

              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                {!!datasTeste.listaDadosBeneficio.valorMargemDisponivelRCC ? (
                  <TableCell>
                    {" "}
                    {formatarValorParaReal(
                      datasTeste.listaDadosBeneficio.valorMargemDisponivelRCC
                    )}
                  </TableCell>
                ) : (
                  <TableCell> ---</TableCell>
                )}
              </View>
            </View>
            {/**Margem Extrapolada */}
            <View style={styles.tableRow}>
              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                <TableCell>
                  {" "}
                  {calculateExtrapoledMargin(
                    datasTeste.listaDadosBeneficio.basedeCalculo,
                    datasTeste.listaDadosBeneficio.valorMargemDisponivel
                  )}
                </TableCell>
              </View>

              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                Teste
                <TableCell>
                  {calculateExtrapoledMarginCard(
                    datasTeste.listaDadosBeneficio.basedeCalculo,
                    datasTeste.listaDadosBeneficio.valorMargemDisponivelRMC
                  )}
                </TableCell>
              </View>

              <View
                style={{
                  width: 110,
                  paddingRight: 4,
                  alignContent: "center",
                  borderRight: 1,
                }}
              >
                <TableCell>
                  {calculateExtrapoledMarginCard(
                    datasTeste.listaDadosBeneficio.basedeCalculo,
                    datasTeste.listaDadosBeneficio.valorMargemDisponivelRCC
                  )}
                </TableCell>
              </View>
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
