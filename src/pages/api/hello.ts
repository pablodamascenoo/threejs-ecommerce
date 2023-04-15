import { NextApiRequest, NextApiResponse } from "next";

export default async function GET(
  request: NextApiRequest,
  response: NextApiResponse
) {
  return response.status(200).json({ msg: "hello world" });
}
