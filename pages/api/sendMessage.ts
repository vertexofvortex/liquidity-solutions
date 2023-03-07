import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  const requestBody = JSON.parse(req.body);
  const body = {
    chat_id: process.env.TG_CHAT_ID,
    text: `<b>💧 Liquidity Solutions</b>\n┗ <code>${crypto.createHash("md5").update(req.body + Date.now()).digest("hex")}</code>\n\n<i>ℹ️ New request</i>\n┣👤: <code>${requestBody.name}</code>\n┣📧: <code>${requestBody.email}</code>\n┗✍️: <code>${requestBody.message}</code>`,
    parse_mode: "html",
  };
  
  const telegramResponse = fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if ((await telegramResponse).status === 200) {
    return res.status(200).json(`{"status": "ok"}`);
  } else {
    return res.status(500).json(`{"status": "error"}`);
  };
}