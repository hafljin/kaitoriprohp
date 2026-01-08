'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* トップバー */}
      <div className="bg-gray-800 text-white py-2 text-sm text-center">
        <p>全国展開中！信頼と実績の買取専門店</p>
      </div>

      {/* メインヘッダー */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">買取専門店</h1>
          </Link>

          {/* PCナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">
              トップ
            </Link>
            <Link href="/items" className="text-gray-700 hover:text-orange-600 font-medium">
              買取品目
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-orange-600 font-medium">
              店舗情報
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium">
              お問い合わせ
            </Link>
          </nav>

          {/* 電話・お問い合わせ */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:0120-000-0000"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 font-medium"
            >
              📞 0120-000-0000
            </a>
            <Link
              href="/contact"
              className="border-2 border-orange-600 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 font-medium"
            >
              お問い合わせ
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                トップ
              </Link>
              <Link
                href="/items"
                className="text-gray-700 hover:text-orange-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                買取品目
              </Link>
              <Link
                href="/shop"
                className="text-gray-700 hover:text-orange-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                店舗情報
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-orange-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
              <a
                href="tel:0120-000-0000"
                className="bg-orange-600 text-white px-4 py-2 rounded-lg text-center font-medium"
              >
                📞 0120-000-0000
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
