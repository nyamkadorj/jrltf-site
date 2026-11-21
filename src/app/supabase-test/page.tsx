"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function SupabaseTestPage() {
  const [status, setStatus] = useState("Ready to test");

  async function testConnection() {
    setStatus("Connecting...");

    try {
      const supabase = createClient();

      const { error } = await supabase.rpc("connection_test");

      if (error) {
        setStatus("Error: " + error.message);
        return;
      }

      setStatus("Supabase connected successfully!");
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "Connection failed"
      );
    }
  }

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">
        Supabase Connection Test
      </h1>

      <button
        onClick={testConnection}
        className="mt-6 rounded-lg bg-green-700 px-6 py-3 text-white"
      >
        Test Connection
      </button>

      <p className="mt-6 text-lg">{status}</p>
    </main>
  );
}