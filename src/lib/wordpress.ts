/**
 * WordPress API service for fetching data from WordPress
 */
const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://your-wordpress-domain.com/wp-json/wp/v2';

export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
  categories?: number[];
  tags?: number[];
}

export interface WordPressProject {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    client: string;
    role: string[];
    honors: string[];
    featured_image: string;
    gallery: string[];
  };
  slug: string;
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WordPressTag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

/**
 * Fetch posts from WordPress
 */
export async function getPosts(perPage = 10): Promise<WordPressPost[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?_embed=wp:featuredmedia&per_page=${perPage}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=wp:featuredmedia`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }

    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
}

/**
 * Fetch projects from WordPress (custom post type)
 */
export async function getProjects(perPage = 20): Promise<WordPressProject[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/projects?per_page=${perPage}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress projects:', error);
    return [];
  }
}

/**
 * Fetch a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<WordPressProject | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/projects?slug=${slug}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch project: ${response.status}`);
    }

    const projects = await response.json();
    return projects.length > 0 ? projects[0] : null;
  } catch (error) {
    console.error('Error fetching WordPress project:', error);
    return null;
  }
}

/**
 * Fetch categories from WordPress
 */
export async function getCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/categories?per_page=100`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress categories:', error);
    return [];
  }
}

/**
 * Fetch tags from WordPress
 */
export async function getTags(): Promise<WordPressTag[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/tags?per_page=100`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch tags: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress tags:', error);
    return [];
  }
}

/**
 * Format WordPress date
 */
export function formatWordPressDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
