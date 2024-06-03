import UploadForm from "./UploadForm";
import ExtractedDisplay from "./ExtractedDisplay";
import fs from "node:fs/promises";

export default async function Home() {
  const files = await fs.readdir("./public/invoices");
  const invoices = files
    .filter((file) => file.endsWith(".pdf"))
    .map((file) => `/invoices/${file}`);

  return (
    <main className="bg-white h-full">
      <controls className="flex ">
        <UploadForm />
      </controls>
      {await Promise.all(invoices.map(async (invoice) => { 
        const file = await fs.readFile(`./public${invoice}.json`,'utf-8');
        const data = JSON.parse(file)
        return (
          <div key={invoice} className="flex m-2">
            <iframe  src={invoice} className="w-1/2" />
            <div>
              <ExtractedDisplay
                title="Amount Due"
                value={data.fields.AmountDue?.content}
                confidence={data.fields.AmountDue?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                title="Billing Address Recipient"
                value={data.fields.BillingAddressRecipient?.content}
                confidence={data.fields.BillingAddressRecipient?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                title="Billing Address"
                value={data.fields.BillingAddress?.content}
                confidence={data.fields.BillingAddress?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                title="Customer Address Recipient"
                value={data.fields.CustomerAddressRecipient?.content}
                confidence={data.fields.CustomerAddressRecipient?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                title="Customer Address"
                value={data.fields.CustomerAddress?.content}
                confidence={data.fields.CustomerAddress?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                title="Customer Id"
                value={data.fields.CustomerId?.content}
                confidence={data.fields.CustomerId?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                title="Customer Name"
                value={data.fields.CustomerName?.content}
                confidence={data.fields.CustomerName?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                title="Due Date"
                value={data.fields.DueDate?.content}
                confidence={data.fields.DueDate?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                title="Invoice Date"
                value={data.fields.InvoiceDate?.content}
                confidence={data.fields.InvoiceDate?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                title="Invoice Id"
                value={data.fields.InvoiceId?.content}
                confidence={data.fields.InvoiceId?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                title="Invoice Total"
                value={data.fields.InvoiceTotal?.content}
                confidence={data.fields.InvoiceTotal?.confidence}
              ></ExtractedDisplay>
            </div>
            <div className="ml-2">
              <ExtractedDisplay
                  title="Previous Unpaid Balance"
                  value={data.fields.PreviousUnpaidBalance?.content}
                  confidence={data.fields.PreviousUnpaidBalance?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                  title="Purchase Order"
                  value={data.fields.PurchaseOrder?.content}
                  confidence={data.fields.PurchaseOrder?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                  title="Remittance Address Recipient"
                  value={data.fields.RemittanceAddressRecipient?.content}
                  confidence={data.fields.RemittanceAddressRecipient?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                  title="Remittance Address"
                  value={data.fields.RemittanceAddress?.content}
                  confidence={data.fields.RemittanceAddress?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                  title="Service Address Recipient"
                  value={data.fields.ServiceAddressRecipient?.content}
                  confidence={data.fields.ServiceAddressRecipient?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                  title="Service Address"
                  value={data.fields.ServiceAddress?.content}
                  confidence={data.fields.ServiceAddress?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                  title="Shipping Address Recipient"
                  value={data.fields.ShippingAddressRecipient?.content}
                  confidence={data.fields.ShippingAddressRecipient?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                  title="Shipping Address"
                  value={data.fields.ShippingAddress?.content}
                  confidence={data.fields.ShippingAddress?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                  title="Sub Total"
                  value={data.fields.SubTotal?.content}
                  confidence={data.fields.SubTotal?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                  title="Total Tax"
                  value={data.fields.TotalTax?.content}
                  confidence={data.fields.TotalTax?.confidence}
              ></ExtractedDisplay>
              <ExtractedDisplay
                  title="Vendor Name"
                  value={data.fields.VendorName?.content}
                  confidence={data.fields.VendorName?.confidence}
              ></ExtractedDisplay>
            </div>
        </div>
      )}))}
      
    </main>
  );
}
