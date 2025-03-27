'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, formatWordPressDate, WordPressPost } from '@/lib/wordpress';
import AnimatedSection from '@/components/ui/animated-section';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!params.slug) return;

      try {
        const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
        const fetchedPost = await getPostBySlug(slug);

        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          // Post not found, redirect to blog page
          router.push('/blog');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug, router]);

  if (loading) {
    return (
      <div className="dabisstudio-container py-20">
        <div className="flex justify-center items-center py-20">
          <p className="text-xl opacity-70">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="dabisstudio-container py-20">
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-xl opacity-70 mb-4">Article not found</p>
          <Link href="/blog" className="inline-flex items-center border-b border-white pb-1">
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  // Get the featured image URL or use a fallback
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    'https://ext.same-assets.com/1247681252/864386195.png';

  return (
    <div className="dabisstudio-container py-20">
      <AnimatedSection animation="fadeIn">
        <Link href="/blog" className="inline-flex items-center mb-10 opacity-70 hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to Blog</span>
        </Link>

        <article>
          <header className="mb-10">
            <h1
              className="text-4xl md:text-5xl font-medium mb-4"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <p className="text-sm opacity-60">
              {formatWordPressDate(post.date)}
            </p>
          </header>

          <div className="aspect-[16/9] mb-10 overflow-hidden">
            <img
              src={featuredImage}
              alt={post.title.rendered}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>
      </AnimatedSection>

      <div className="mt-20 border-t border-zinc-800 pt-10">
        <h2 className="text-2xl font-medium mb-6">Read more articles</h2>
        <Link href="/blog" className="inline-flex items-center border-b border-white pb-1">
          <span className="mr-2">View all articles</span>
          <img
            src="https://ext.same-assets.com/1247681252/4094201864.svg"
            alt="Arrow"
            className="w-4 h-4"
          />
        </Link>
      </div>
    </div>
  );
}
