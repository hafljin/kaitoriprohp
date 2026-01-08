import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | 高価買取で安心・信頼の買取サービス',
  description: '無料査定やご質問など、お気軽にお問い合わせください。フリーダイヤルやお問い合わせフォームからご連絡いただけます。',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
