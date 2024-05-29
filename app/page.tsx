import UploadForm from "./UploadForm";
import fs from "node:fs/promises";

export default async function Home() {
  const files = await fs.readdir("./public/invoices");
  const invoices = files
    .filter((file) => file.endsWith(".pdf"))
    .map((file) => `/invoices/${file}`);

  return (
    <main className="bg-white h-full">
      <UploadForm />
      {await Promise.all(invoices.map(async (invoice) => { 
        const file = await fs.readFile(`./public${invoice}.json`,'utf-8');
        const data = JSON.parse(file)
        return (
          <div key={invoice} className="flex h-full m-2">
            <iframe  src={invoice} className="w-1/2 h-full" />
            <div>
              <p className="text-xl font-bold">Amount Due:</p>
              <p>Value: {data.fields.AmountDue?.content}</p>
              <p>Confidence: {data.fields.AmountDue?.confidence}</p>
              <p className="text-xl font-bold mt-2">Billing Address:</p>
              <p>Value: {data.fields.BillingAddress?.content}</p>
              <p>Confidence: {data.fields.BillingAddress?.confidence}</p>
              <p className="text-xl font-bold mt-2">Billing Address Recipient:</p>
              <p>Value: {data.fields.BillingAddressRecipient?.content}</p>
              <p>Confidence: {data.fields.BillingAddressRecipient?.confidence}</p>
              <p className="text-xl font-bold mt-2">Customer Address:</p>
              <p>Value: {data.fields.CustomerAddress?.content}</p>
              <p>Confidence: {data.fields.CustomerAddress?.confidence}</p>
              <p className="text-xl font-bold mt-2">Customer Address Recipient:</p>
              <p>Value: {data.fields.CustomerAddressRecipient?.content}</p>
              <p>Confidence: {data.fields.CustomerAddressRecipient?.confidence}</p>
              <p className="text-xl font-bold mt-2">Customer Id:</p>
              <p>Value: {data.fields.CustomerId?.content}</p>
              <p>Confidence: {data.fields.CustomerId?.confidence}</p>
              <p className="text-xl font-bold mt-2">Customer Name:</p>
              <p>Value: {data.fields.CustomerName?.content}</p>
              <p>Confidence: {data.fields.CustomerName?.confidence}</p>
              <p className="text-xl font-bold mt-2">Due Date:</p>
              <p>Value: {data.fields.DueDate?.content}</p>
              <p>Confidence: {data.fields.DueDate?.confidence}</p>
              <p className="text-xl font-bold mt-2">Invoice Date:</p>
              <p>Value: {data.fields.InvoiceDate?.content}</p>
              <p>Confidence: {data.fields.InvoiceDate?.confidence}</p>
              <p className="text-xl font-bold mt-2">Invoice Id:</p>
              <p>Value: {data.fields.InvoiceId?.content}</p>
              <p>Confidence: {data.fields.InvoiceId?.confidence}</p>
              <p className="text-xl font-bold mt-2">Invoice Total:</p>
              <p>Value: {data.fields.InvoiceTotal?.content}</p>
              <p>Confidence: {data.fields.InvoiceTotal?.confidence}</p>
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold">Previous Unpaid Balance:</p>
              <p>Value: {data.fields.PreviousUnpaidBalance?.content}</p>
              <p>Confidence: {data.fields.PreviousUnpaidBalance?.confidence}</p>
              <p className="text-xl font-bold mt-2">Purchase Order:</p>
              <p>Value: {data.fields.PurchaseOrder?.content}</p>
              <p>Confidence: {data.fields.PurchaseOrder?.confidence}</p>
              <p className="text-xl font-bold mt-2">Remittance Address:</p>
              <p>Value: {data.fields.RemittanceAddress?.content}</p>
              <p>Confidence: {data.fields.RemittanceAddress?.confidence}</p>
              <p className="text-xl font-bold mt-2">Remittance Address Recipient:</p>
              <p>Value: {data.fields.RemittanceAddressRecipient?.content}</p>
              <p>Confidence: {data.fields.RemittanceAddressRecipient?.confidence}</p>
              <p className="text-xl font-bold mt-2">Service Address:</p>
              <p>Value: {data.fields.ServiceAddress?.content}</p>
              <p>Confidence: {data.fields.ServiceAddress?.confidence}</p>
              <p className="text-xl font-bold mt-2">Service Address Recipient:</p>
              <p>Value: {data.fields.ServiceAddressRecipient?.content}</p>
              <p>Confidence: {data.fields.ServiceAddressRecipient?.confidence}</p>
              <p className="text-xl font-bold mt-2">Shipping Address:</p>
              <p>Value: {data.fields.ShippingAddress?.content}</p>
              <p>Confidence: {data.fields.ShippingAddress?.confidence}</p>
              <p className="text-xl font-bold mt-2">Shipping Address Recipient:</p>
              <p>Value: {data.fields.ShippingAddressRecipient?.content}</p>
              <p>Confidence: {data.fields.ShippingAddressRecipient?.confidence}</p>
              <p className="text-xl font-bold mt-2">Sub Total:</p>
              <p>Value: {data.fields.SubTotal?.content}</p>
              <p>Confidence: {data.fields.SubTotal?.confidence}</p>
              <p className="text-xl font-bold mt-2">Total Tax:</p>
              <p>Value: {data.fields.TotalTax?.content}</p>
              <p>Confidence: {data.fields.TotalTax?.confidence}</p>
              <p className="text-xl font-bold mt-2">Vendor Name:</p>
              <p>Value: {data.fields.VendorName?.content}</p>
              <p>Confidence: {data.fields.VendorName?.confidence}</p>
            </div>
        </div>
      )}))}
      
    </main>
  );
}
