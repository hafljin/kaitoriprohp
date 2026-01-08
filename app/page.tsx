import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '買取専門店 | 高価買取で安心・信頼の買取サービス',
  description: '金・貴金属・ブランド品・時計など、幅広い品目を高価買取いたします。店舗買取・出張買取対応。親切丁寧な対応でお客様にご満足いただけるサービスを提供しております。',
  openGraph: {
    title: '買取専門店 | 高価買取で安心・信頼の買取サービス',
    description: '金・貴金属・ブランド品・時計など、幅広い品目を高価買取いたします。',
    type: 'website',
  },
};

export default function Home() {
  const features = [
    {
      title: '高価買取',
      description: '市場価格に合わせた適正な査定で、お客様の大切な品物を高く買取ります。',
      icon: '💰',
    },
    {
      title: '安心・信頼',
      description: '長年の実績と信頼のある買取専門店として、お客様にご安心いただけるサービスです。',
      icon: '✅',
    },
    {
      title: '親切対応',
      description: '初めての方でも分かりやすく、丁寧な対応を心がけております。',
      icon: '🤝',
    },
  ];

  const categories = [
    {
      name: '金・貴金属',
      description: '金、プラチナ、銀などの貴金属を高価買取',
      image: '💍',
    },
    {
      name: 'ブランド品',
      description: '時計、バッグ、アクセサリーなど',
      image: '👜',
    },
    {
      name: '時計',
      description: '機械式時計、クォーツ時計など',
      image: '⌚',
    },
    {
      name: '切手・古銭',
      description: '切手、古銭、記念硬貨など',
      image: '🎫',
    },
    {
      name: 'カメラ',
      description: 'デジタルカメラ、フィルムカメラなど',
      image: '📷',
    },
    {
      name: 'その他',
      description: 'その他様々な品目を買取',
      image: '📦',
    },
  ];

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            高価買取で安心・信頼の<br />
            買取専門店
          </h1>
          <p className="text-xl mb-8 text-orange-50">
            金・貴金属・ブランド品など、幅広い品目を高価買取いたします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition"
            >
              無料査定を依頼する
            </Link>
            <a
              href="tel:0120-000-0000"
              className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-800 transition"
            >
              📞 0120-000-0000
            </a>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">選ばれる理由</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 買取品目セクション */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">買取品目</h2>
          <p className="text-center text-gray-600 mb-12">
            様々な品目を高価買取いたします
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href="/items"
                className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-orange-500 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4 text-center">{category.image}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{category.name}</h3>
                <p className="text-gray-600 text-center text-sm">{category.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/items"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition"
            >
              買取品目一覧を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 買取方法セクション */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">買取方法</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">店舗買取</h3>
              <p className="text-gray-600 mb-4">
                店舗に直接お持ちいただき、その場で査定・買取が可能です。
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ その場で査定・買取</li>
                <li>✓ 即日現金化可能</li>
                <li>✓ スタッフが丁寧に対応</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">出張買取</h3>
              <p className="text-gray-600 mb-4">
                ご自宅やお勤め先までスタッフがお伺いし、査定・買取を行います。
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ ご自宅までお伺い</li>
                <li>✓ 複数品目も対応</li>
                <li>✓ 無料見積もり</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">郵送買取</h3>
              <p className="text-gray-600 mb-4">
                お品物を郵送していただき、査定後ご連絡いたします。
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ 送料無料（条件あり）</li>
                <li>✓ 査定後お電話でご連絡</li>
                <li>✓ ご納得いただけない場合は返送</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">まずはお気軽にお問い合わせください</h2>
          <p className="text-xl mb-8 text-orange-50">
            無料査定実施中！お気軽にご相談ください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition"
            >
              お問い合わせフォーム
            </Link>
            <a
              href="tel:0120-000-0000"
              className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-800 transition"
            >
              📞 0120-000-0000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
