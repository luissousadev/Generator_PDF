import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./pdfComponent";

const PDFViewerComponent = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);

export default PDFViewerComponent;
