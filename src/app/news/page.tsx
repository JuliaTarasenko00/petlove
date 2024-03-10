import { NewsList } from '@/components/news/NewsList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News',
};

export default function NewsPage() {
  return <NewsList />;
}
