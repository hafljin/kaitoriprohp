import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '買取品目一覧 | 高価買取で安心・信頼の買取サービス',
  description: '金・貴金属、ブランド品、時計、切手・古銭、カメラなど、幅広い品目を高価買取いたします。詳細な買取対象品目をご確認ください。',
};

export default function ItemsPage() {
  const items = [
    {
      id: 1,
      name: '金・貴金属',
      description: '金、プラチナ、銀などの貴金属を高価買取いたします。アクセサリー、コイン、地金など様々な形態の貴金属に対応しております。',
      image: '💍',
      details: [
        '18金、24金のアクセサリー',
        'プラチナ製品',
        'シルバーアクセサリー',
        '地金（ゴールドバーなど）',
        'コイン（記念硬貨など）',
      ],
    },
    {
      id: 2,
      name: 'ブランド品',
      description: '人気ブランドのバッグ、アクセサリー、時計などを高価買取いたします。状態の良いものほど高値で買取可能です。',
      image: '👜',
      details: [
        'ブランドバッグ（ルイ・ヴィトン、シャネル、エルメスなど）',
        'ブランドアクセサリー',
        'スカーフ・マフラー',
        'サングラス',
        'その他ブランド雑貨',
      ],
    },
    {
      id: 3,
      name: '時計',
      description: '機械式時計、クォーツ時計、スマートウォッチなど、様々な時計を買取いたします。',
      image: '⌚',
      details: [
        '機械式時計（オメガ、ロレックス、タグホイヤーなど）',
        'クォーツ時計',
        'スマートウォッチ',
        '懐中時計',
        'その他時計類',
      ],
    },
    {
      id: 4,
      name: '切手・古銭',
      description: '切手、古銭、記念硬貨などを高価買取いたします。レアなものほど高値が付きます。',
      image: '🎫',
      details: [
        '切手（使用済み・未使用）',
        '古銭',
        '記念硬貨',
        '紙幣（古紙幣など）',
        'その他コレクション',
      ],
    },
    {
      id: 5,
      name: 'カメラ',
      description: 'デジタルカメラ、フィルムカメラ、レンズなどを買取いたします。',
      image: '📷',
      details: [
        'デジタル一眼レフカメラ',
        'フィルムカメラ',
        'レンズ',
        'アクセサリー',
        'その他カメラ関連製品',
      ],
    },
    {
      id: 6,
      name: 'その他',
      description: 'その他様々な品目を買取いたします。お気軽にお問い合わせください。',
      image: '📦',
      details: [
        '骨董品',
        '美術品',
        '楽器',
        'その他高価買取可能な品目',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ページヘッダー */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">買取品目</h1>
          <p className="text-xl text-orange-50">
            様々な品目を高価買取いたします
          </p>
        </div>
      </section>

      {/* 買取品目一覧 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="text-6xl mb-4">{item.image}</div>
                    <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold mb-2">買取対象品目：</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                        {item.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-600 mr-2">✓</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-orange-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">お気軽にご相談ください</h2>
            <p className="mb-6 text-orange-50">
              買取可能かどうかご不明な点がございましたら、お気軽にお問い合わせください
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
