'use client'
import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./pdfDocumentComponent";

const PDFViewerComponent = (datas: any) => (
  



  <PDFViewer className="w-full h-full">
    <MyDocument datas={datas}/>
  </PDFViewer>
);

export default PDFViewerComponent;
