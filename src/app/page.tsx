"use client";

import PDFViewerComponent from "@/app/components/pdf/pdfView";
import InputRequestComponent from "./components/inputRequest/inputRequest";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState();
  const [datas, setDatas] = useState({});

  const handleRequest = async (): Promise<any> => {
    const res = await axios.get("http://localhost:3000/api/hello");
    setDatas(res.data);
    console.log(res.data);
    return;
  };

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-2/4 h-screen bg-neutral-500 justify-center">
          <div>
            <div>Home</div>
            <InputRequestComponent></InputRequestComponent>
            <button>Buscar</button>
          </div>
        </div>
      </div>
    </>
  );
}
