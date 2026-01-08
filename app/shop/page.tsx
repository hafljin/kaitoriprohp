import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '店舗情報 | 高価買取で安心・信頼の買取サービス',
  description: '買取専門店の店舗情報をご案内いたします。店舗買取、出張買取、郵送買取に対応しております。お近くの店舗へお気軽にお越しください。',
};

export default function ShopPage() {
  const shops = [
    {
      name: '本店',
      address: '東京都千代田区〇〇1-2-3',
      phone: '03-1234-5678',
      hours: '9:00〜20:00',
      access: 'JR〇〇線〇〇駅 徒歩5分',
    },
    {
      name: '〇〇店',
      address: '大阪府大阪市〇〇区〇〇2-3-4',
      phone: '06-1234-5678',
      hours: '9:00〜20:00',
      access: '地下鉄〇〇線〇〇駅 徒歩3分',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ページヘッダー */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">店舗情報</h1>
          <p className="text-xl text-orange-50">
            お近くの店舗へお気軽にお越しください
          </p>
        </div>
      </section>

      {/* 店舗一覧 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shops.map((shop, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">{shop.name}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-700 mb-1">住所</h3>
                    <p className="text-gray-600">{shop.address}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700 mb-1">電話番号</h3>
                    <a
                      href={`tel:${shop.phone}`}
                      className="text-orange-600 hover:text-orange-700 font-medium"
                    >
                      {shop.phone}
                    </a>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700 mb-1">営業時間</h3>
                    <p className="text-gray-600">{shop.hours}</p>
                    <p className="text-sm text-gray-500">（年末年始を除く）</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700 mb-1">アクセス</h3>
                    <p className="text-gray-600">{shop.access}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 地図エリア（プレースホルダー） */}
          <div className="mt-12 bg-gray-200 rounded-lg p-16 text-center">
            <p className="text-gray-600 text-lg">地図エリア（実装予定）</p>
            <p className="text-gray-500 text-sm mt-2">
              Google Maps等の地図サービスを埋め込む予定
            </p>
          </div>

          {/* 買取方法 */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">買取方法</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="font-bold mb-2">店舗買取</h3>
                <p className="text-sm text-gray-600">
                  店舗に直接お持ちいただき、その場で査定・買取が可能です
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="font-bold mb-2">出張買取</h3>
                <p className="text-sm text-gray-600">
                  ご自宅やお勤め先までスタッフがお伺いします
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="font-bold mb-2">郵送買取</h3>
                <p className="text-sm text-gray-600">
                  お品物を郵送していただき、査定後ご連絡いたします
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-orange-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">まずはお気軽にご相談ください</h2>
            <p className="mb-6 text-orange-50">
              無料査定実施中！お気軽にお問い合わせください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition"
              >
                お問い合わせフォーム
              </Link>
              <a
                href="tel:0120-000-0000"
                className="bg-orange-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-800 transition"
              >
                📞 0120-000-0000
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
