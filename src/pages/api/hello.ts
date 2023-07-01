import { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}

/// http://localhost:3000/api/hello
