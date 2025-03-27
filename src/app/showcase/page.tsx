'use client';

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import Link from 'next/link';
import ThreeScene from '@/components/ui/three-scene';
import AnimatedSection from '@/components/ui/animated-section';
import { getPosts, WordPressPost } from '@/lib/wordpress';

// Emotion styled components
const ShowcaseContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
`;

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

const ThreeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const BlogSection = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const BlogCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const BlogContent = styled.div`
  padding: 20px;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const BlogExcerpt = styled.div`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 15px;
`;

export default function ShowcasePage() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Animate the title with GSAP
    gsap.from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    });

    gsap.from('.hero-button', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: 'power3.out',
    });

    // Fetch WordPress posts
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts(6);
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
    <ShowcaseContainer>
      <HeroSection>
        <ThreeContainer>
          <ThreeScene />
        </ThreeContainer>

        <HeroContent>
          <Title className="hero-title">Technology Showcase</Title>
          <Subtitle className="hero-subtitle">
            Next.js + React + Emotion + GSAP + Three.js + WordPress
          </Subtitle>
          <Button href="#blog" className="hero-button">
            Explore
          </Button>
        </HeroContent>
      </HeroSection>

      <BlogSection id="blog">
        <AnimatedSection animation="slideUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from WordPress</h2>
          <p className="text-lg opacity-70">
            Content fetched from WordPress CMS
          </p>
        </AnimatedSection>

        <BlogGrid>
          {loading ? (
            <p>Loading posts...</p>
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <AnimatedSection key={post.id} animation="fadeIn" delay={0.1}>
                <BlogCard>
                  <BlogImage
                    style={{
                      backgroundImage: `url(${
                        post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                        'https://ext.same-assets.com/1247681252/864386195.png'
                      })`,
                    }}
                  />
                  <BlogContent>
                    <BlogTitle>{post.title.rendered}</BlogTitle>
                    <BlogExcerpt
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:underline">
                      Read more
                    </Link>
                  </BlogContent>
                </BlogCard>
              </AnimatedSection>
            ))
          ) : (
            <p>No posts found. Configure your WordPress API URL in next.config.mjs</p>
          )}
        </BlogGrid>
      </BlogSection>
    </ShowcaseContainer>
  );
}
