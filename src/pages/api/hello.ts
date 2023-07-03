import { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await axios.get(req.query.url as string);
  res.status(200).json(data);
}

/// http://localhost:3000/api/hello
