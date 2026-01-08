import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">買取専門店</h3>
            <p className="text-gray-400 text-sm">
              信頼と実績の買取専門店として、お客様にご満足いただけるサービスを提供しております。
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="font-bold mb-4">メニュー</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  トップ
                </Link>
              </li>
              <li>
                <Link href="/items" className="text-gray-400 hover:text-white">
                  買取品目
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white">
                  店舗情報
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* 買取方法 */}
          <div>
            <h4 className="font-bold mb-4">買取方法</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>店舗買取</li>
              <li>出張買取</li>
              <li>郵送買取</li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="font-bold mb-4">お問い合わせ</h4>
            <p className="text-sm text-gray-400 mb-2">フリーダイヤル</p>
            <a
              href="tel:0120-000-0000"
              className="text-2xl font-bold text-orange-400 hover:text-orange-300"
            >
              0120-000-0000
            </a>
            <p className="text-xs text-gray-400 mt-2">
              受付時間: 9:00〜20:00<br />
              (年末年始を除く)
            </p>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 買取専門店. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
