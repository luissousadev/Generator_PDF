"use client";

import PDFViewerComponent from "@/app/components/pdf/pdfView";
import InputRequestComponent from "./components/inputRequest/inputRequest";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [datas, setDatas] = useState({});
  const hasDataToRenderPdf = Object.keys(datas).length > 0;

  const handleRequest = async (url: string): Promise<any> => {
    try {
      // http://localhost:3000/api/hello
      const res = await axios.get(url);
      setDatas(res.data);
      console.log(res.data);
      console.log(datas);
    } catch (error) {
      console.error("Ocorreu um erro ao fazer a requisição:", error);
    }
  };

  const handleChangeInput = (value: string) => {
    console.log(value);
    setUrl(value);
  };

  return (
    <>
      <div className="flex flex-col  items-center ">
        <div className="flex w-2/4 h-screen bg-neutral-500 justify-center">
          <div>
            <h1 className="text-4xl mb-10">Gerador de PDF</h1>
            <div className="border-4 mb-20 p-4">
              <InputRequestComponent
                url={url}
                onChange={handleChangeInput}
              ></InputRequestComponent>

              <button
                className="border-2 bg-white ml-10 "
                onClick={() => handleRequest(url)}
              >
                Buscar
              </button>
            </div>
            {hasDataToRenderPdf && (
              <PDFViewerComponent datas={datas}></PDFViewerComponent>
            )}
          </div>
        </div>
        <div className="flex w-2/4 h-screen bg-neutral-500 justify-center"></div>
      </div>
    </>
  );
}
