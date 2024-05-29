const {
  AzureKeyCredential,
  DocumentAnalysisClient
} = require("@azure/ai-form-recognizer");

export default async function main(base64Source: any) {
    const client = new DocumentAnalysisClient(
        "https://choste-test.cognitiveservices.azure.com/",
        new AzureKeyCredential("ae508e77c5044fb4bed0fb63668350a0"),
      );

      const poller = await client.beginAnalyzeDocument("prebuilt-invoice", base64Source);
      const { documents } = await poller.pollUntilDone();
  return documents[0];
}
