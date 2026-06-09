"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  productId: string;
};

export function CheckoutModal({ open, onClose, productId }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function checkout() {
    if (!email.trim()) return;

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            product_id: productId,
            success_url: window.location.origin,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      window.location.href = data.checkout_url;
    } catch (err) {
      console.error(err);
      alert("Failed to create checkout session");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-void/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="card-surface w-full max-w-md rounded-3xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6">
          <h3 className="font-serif text-3xl text-text-primary">
            Purchase License
          </h3>

          <p className="mt-2 text-sm text-text-secondary">
            Enter the email that will own this license.
          </p>
        </div>

        <div>
          <label className="mb-2 block font-mono text-xs uppercase tracking-wide text-text-muted">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="
              w-full rounded-xl
              border border-border-subtle
              bg-surface-elevated
              px-4 py-3
              text-text-primary
              outline-none
              transition-colors
              placeholder:text-text-muted
              focus:border-accent/30
            "
          />
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="
              rounded-xl
              border border-border-subtle
              px-4 py-2
              text-sm
              text-text-secondary
              transition-colors
              hover:text-text-primary
            "
          >
            Cancel
          </button>

          <button
            onClick={checkout}
            disabled={loading}
            className="
              rounded-xl
              bg-accent
              px-5 py-2
              text-sm
              font-medium
              text-void
              transition-opacity
              disabled:opacity-50
            "
          >
            {loading ? "Creating checkout..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
