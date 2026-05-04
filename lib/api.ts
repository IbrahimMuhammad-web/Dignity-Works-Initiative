import type { RequestFormData, WorkerFormData } from "@/types";

// MVP: stub functions. Wire these to Firebase / Supabase / Node API later.
// Right now the WhatsApp deep link is the source of truth for new requests.

export async function submitRequest(data: RequestFormData): Promise<{ ok: true }> {
  console.log("[api] submitRequest", data);
  return { ok: true };
}

export async function registerWorker(data: WorkerFormData): Promise<{ ok: true }> {
  console.log("[api] registerWorker", data);
  return { ok: true };
}
