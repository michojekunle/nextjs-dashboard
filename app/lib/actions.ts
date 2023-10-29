'use server'

import { z } from "zod";

const InvoiceSchema = z.object({
    id: z.string(),
    cuctomerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
})

const CreateInvoice = InvoiceSchema.omit({ id: true, date:true });

export async function createInvoice(formData: FormData) {
    const {  } = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      };
      // Test it out:
      console.log(rawFormData);
}