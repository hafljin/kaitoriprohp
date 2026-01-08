'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    item: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信の処理（プロトタイプなので、アラートで対応）
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ページヘッダー */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-xl text-orange-50">
            無料査定やご質問など、お気軽にお問い合わせください
          </p>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              お問い合わせありがとうございます。後日担当者よりご連絡いたします。
            </div>
          )}

          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="item" className="block text-sm font-medium text-gray-700 mb-2">
                  買取希望品目
                </label>
                <select
                  id="item"
                  name="item"
                  value={formData.item}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">選択してください</option>
                  <option value="gold">金・貴金属</option>
                  <option value="brand">ブランド品</option>
                  <option value="watch">時計</option>
                  <option value="stamp">切手・古銭</option>
                  <option value="camera">カメラ</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>

          {/* 電話でのお問い合わせ */}
          <div className="mt-8 bg-orange-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">電話でのお問い合わせ</h2>
            <p className="text-xl mb-4 text-orange-50">
              フリーダイヤル
            </p>
            <a
              href="tel:0120-000-0000"
              className="text-3xl font-bold hover:text-orange-200 transition"
            >
              0120-000-0000
            </a>
            <p className="text-sm mt-4 text-orange-100">
              受付時間: 9:00〜20:00（年末年始を除く）
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
