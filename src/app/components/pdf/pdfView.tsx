"use client";
import React, { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./pdfDocumentComponent";

const PDFViewerComponent = ({ datas }: { datas: any }) => (
  // const [hasData, setHasData] = useState(false)

  // useEffect(() => {}, []);

  <PDFViewer className="w-full h-full">
    <MyDocument datas={datas} />
  </PDFViewer>
);

export default PDFViewerComponent;
