'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPosts, formatWordPressDate, WordPressPost } from '@/lib/wordpress';
import AnimatedSection from '@/components/ui/animated-section';

// Create a component for the section header
const SectionHeader = ({ title, count }: { title: string; count: number }) => (
  <div className="flex justify-between items-center mb-10">
    <h1 className="text-4xl md:text-5xl font-medium">{title}</h1>
    <span className="text-sm opacity-60">{count} articles</span>
  </div>
);

// Create a component for the article card
const ArticleCard = ({
  post
}: {
  post: WordPressPost
}) => {
  // Get the featured image URL or use a fallback
  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    'https://ext.same-assets.com/1247681252/864386195.png';

  // Generate a random background color class
  const bgColors = [
    'bg-zinc-900', 'bg-emerald-200', 'bg-yellow-100',
    'bg-pink-300', 'bg-blue-200', 'bg-green-200', 'bg-purple-200'
  ];
  const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <div className="relative overflow-hidden">
        <div className={`aspect-[4/3] ${randomBgColor} relative overflow-hidden`}>
          <img
            src={imageUrl}
            alt={post.title.rendered}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-medium group-hover:underline"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <p className="text-sm opacity-60 mt-2">
            {formatWordPressDate(post.date)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default function BlogPage() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts(8);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="dabisstudio-container py-20">
      <SectionHeader title="All articles" count={posts.length} />

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <p className="text-xl opacity-70">Loading articles...</p>
        </div>
      ) : posts.length > 0 ? (
        <>
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <AnimatedSection key={post.id} animation="fadeIn">
                <ArticleCard post={post} />
              </AnimatedSection>
            ))}
          </div>

          {/* Invitation */}
          <div className="mt-20 text-center">
            <p className="mb-4">Now that you've seen what dabisstudio achieved, get to know us better.</p>
            <Link href="/works" className="inline-flex items-center border-b border-white pb-1">
              <span className="mr-2">All Projects</span>
              <img
                src="https://ext.same-assets.com/1247681252/4094201864.svg"
                alt="Arrow"
                className="w-4 h-4"
              />
            </Link>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-xl opacity-70 mb-4">No articles found</p>
          <p className="opacity-50 text-center max-w-md">
            Make sure your WordPress API URL is correctly configured in next.config.mjs
            and that you have published posts in your WordPress site.
          </p>
        </div>
      )}
    </div>
  );
}
