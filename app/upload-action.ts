"use server";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";
import docAI from "../lib/doc-ai-submit"

export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File;
  
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  let document
  try {
    document = await docAI(buffer)
  } catch (e) {
    console.log(e)
  }

  await fs.writeFile(`public/invoices/${file.name}`, buffer);
  await fs.writeFile(`public/invoices/${file.name}.json`, JSON.stringify(document, null, 2))

  revalidatePath("/");
}
