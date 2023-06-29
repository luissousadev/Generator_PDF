'use client'
import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./pdfDocumentComponent";

const PDFViewerComponent = () => (
  



  <PDFViewer className="w-full h-full">
    <MyDocument />
  </PDFViewer>
);

export default PDFViewerComponent;
