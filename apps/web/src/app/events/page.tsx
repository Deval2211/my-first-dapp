 'use client';

import Link from 'next/link';
import { WalletButton } from '@/components/wallet-button';
import { ERC721InteractionPanel } from '@/lib/erc721-stylus/src/ERC721InteractionPanel';

export default function EventsPage() {
  return (
    <main className="min-h-screen p-12">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Events</h1>
          <div className="flex items-center gap-4">
            <WalletButton />
            <Link href="/">
              <a className="text-sm text-gray-600">Home</a>
            </Link>
          </div>
        </header>

        <p className="text-gray-600 mb-6">No events yet — this is a placeholder Events page. Replace with your event listing component.</p>

        <div className="grid gap-4">
          <div className="p-4 border rounded">Example Event • Neon Horizons • Apr 19, 2025</div>
          <div className="p-4 border rounded">Example Event • Sunset Beats • May 02, 2025</div>
        </div>

        <div className="mt-8">
          {/* Insert ERC721 interaction panel with provided contract identifier */}
          <ERC721InteractionPanel contractAddress={"4525818b4e7a741383c49e446010e7fd"} />
        </div>
      </div>
    </main>
  );
}
