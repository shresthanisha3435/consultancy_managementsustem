import React from 'react';

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: "Transforming Client Relationships: The Future of Consultancy Management",
    excerpt: "Discover how modern consultancy management systems are revolutionizing the way firms interact with clients, streamline operations, and drive growth in today's competitive landscape.",
    author: "Sarah Mitchell",
    date: "August 25, 2025",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "public/images/first.jpg" // Add your image to public/images/
  };

  const blogPosts = [
    {
      id: 2,
      title: "5 Essential Features Every Consultancy Needs in 2025",
      excerpt: "From AI-powered analytics to automated client onboarding, explore the must-have features that are defining successful consultancy management platforms.",
      author: "Michael Chen",
      date: "August 22, 2025",
      readTime: "6 min read",
      category: "Product Updates",
      image: "public/images/two.jpg"
    },
    {
      id: 3,
      title: "Case Study: How ABC Consulting Increased Revenue by 40%",
      excerpt: "Learn how ABC Consulting leveraged our management system to streamline their operations and achieve remarkable growth in just 6 months.",
      author: "Emily Rodriguez",
      date: "August 20, 2025",
      readTime: "10 min read",
      category: "Case Studies",
      image: "public/images/thrd.jpeg"
    },
    {
      id: 4,
      title: "Building Trust Through Transparent Project Management",
      excerpt: "Transparency is key to successful consulting relationships. Here's how to use project management tools to build stronger client trust.",
      author: "David Kumar",
      date: "August 18, 2025",
      readTime: "7 min read",
      category: "Best Practices",
      image: "public/images/forth.jpeg"
    },
    {
      id: 5,
      title: "Data Security in Consultancy: Protecting Client Information",
      excerpt: "With increasing cyber threats, consultancy firms must prioritize data security. Learn about best practices and compliance requirements.",
      author: "Lisa Thompson",
      date: "August 15, 2025",
      readTime: "9 min read",
      category: "Security",
      image: "public/images/fifth.jpeg"
    },
    {
      id: 6,
      title: "The ROI of Automated Workflows in Consulting",
      excerpt: "Automation isn't just about efficiency—it's about profitability. Discover how automated workflows can significantly impact your bottom line.",
      author: "James Wilson",
      date: "August 12, 2025",
      readTime: "5 min read",
      category: "Automation",
      image: "public/images/six.jpeg"
    },
    {
      id: 7,
      title: "Remote Consulting: Tools and Strategies for Success",
      excerpt: "The shift to remote consulting is permanent. Learn how to maintain client relationships and deliver exceptional service from anywhere.",
      author: "Anna Patel",
      date: "August 10, 2025",
      readTime: "8 min read",
      category: "Remote Work",
      image: "public/images/seven.jpeg"
    }
  ];

  const categories = ["All", "Industry Insights", "Product Updates", "Case Studies", "Best Practices", "Security", "Automation", "Remote Work"];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [hoveredPost, setHoveredPost] = React.useState(null);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const styles = {
    container: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#fff',
      minHeight: '100vh',
      color: '#000'
    },
    header: {
      textAlign: 'center',
      padding: '4rem 2rem 2rem',
      backgroundColor: '#fff',
      borderBottom: '1px solid #eee'
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: '1rem',
      margin: 0
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#666',
      margin: 0,
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    main: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    featuredSection: {
      padding: '3rem 0',
      borderBottom: '1px solid #eee'
    },
    featuredCard: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    featuredCardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
    },
    featuredImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover'
    },
    featuredContent: {
      padding: '2rem'
    },
    categoryTag: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '0.25rem 0.75rem',
      borderRadius: '15px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      display: 'inline-block',
      marginBottom: '1rem'
    },
    featuredTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: '1rem',
      lineHeight: '1.3'
    },
    excerpt: {
      fontSize: '1.1rem',
      color: '#666',
      marginBottom: '1.5rem',
      lineHeight: '1.6'
    },
    meta: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      fontSize: '0.9rem',
      color: '#888'
    },
    filterSection: {
      padding: '2rem 0',
      textAlign: 'center'
    },
    filterButtons: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '1rem'
    },
    filterButton: {
      padding: '0.5rem 1.5rem',
      border: '1px solid #ddd',
      backgroundColor: '#fff',
      color: '#666',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'all 0.2s ease'
    },
    activeFilter: {
      backgroundColor: '#000',
      color: '#fff',
      borderColor: '#000'
    },
    postsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      padding: '2rem 0 4rem'
    },
    postCard: {
      backgroundColor: '#fff',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    postCardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
    },
    postImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    postContent: {
      padding: '1.5rem'
    },
    postTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: '0.75rem',
      lineHeight: '1.4'
    },
    postExcerpt: {
      fontSize: '0.95rem',
      color: '#666',
      marginBottom: '1rem',
      lineHeight: '1.5'
    },
    postMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '0.85rem',
      color: '#888'
    },
    newsletter: {
      backgroundColor: '#f9f9f9',
      padding: '3rem 2rem',
      textAlign: 'center',
      borderTop: '1px solid #eee'
    },
    newsletterTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: '1rem'
    },
    newsletterText: {
      fontSize: '1.1rem',
      color: '#666',
      marginBottom: '2rem',
      maxWidth: '500px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    newsletterForm: {
      display: 'flex',
      gap: '1rem',
      maxWidth: '400px',
      margin: '0 auto',
      alignItems: 'center'
    },
    emailInput: {
      flex: 1,
      padding: '0.75rem 1rem',
      border: '1px solid #ddd',
      borderRadius: '25px',
      fontSize: '1rem',
      outline: 'none'
    },
    subscribeButton: {
      padding: '0.75rem 2rem',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '25px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Consultancy Insights</h1>
        <p style={styles.subtitle}>
          Expert insights, industry trends, and practical tips to help you grow your consultancy business
        </p>
      </div>

      <div style={styles.main}>
        {/* Featured Post */}
        <section style={styles.featuredSection}>
          <div
            style={{
              ...styles.featuredCard,
              ...(hoveredPost === 'featured' ? styles.featuredCardHover : {})
            }}
            onMouseEnter={() => setHoveredPost('featured')}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title}
              style={styles.featuredImage}
            />
            <div style={styles.featuredContent}>
              <span style={styles.categoryTag}>{featuredPost.category}</span>
              <h2 style={styles.featuredTitle}>{featuredPost.title}</h2>
              <p style={styles.excerpt}>{featuredPost.excerpt}</p>
              <div style={styles.meta}>
                <span>{featuredPost.author}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section style={styles.filterSection}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Browse by Category
          </h3>
          <div style={styles.filterButtons}>
            {categories.map((category) => (
              <button
                key={category}
                style={{
                  ...styles.filterButton,
                  ...(selectedCategory === category ? styles.activeFilter : {})
                }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <div style={styles.postsGrid}>
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                style={{
                  ...styles.postCard,
                  ...(hoveredPost === post.id ? styles.postCardHover : {})
                }}
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  style={styles.postImage}
                />
                <div style={styles.postContent}>
                  <span style={{
                    ...styles.categoryTag,
                    fontSize: '0.7rem',
                    padding: '0.2rem 0.6rem'
                  }}>
                    {post.category}
                  </span>
                  <h3 style={styles.postTitle}>{post.title}</h3>
                  <p style={styles.postExcerpt}>{post.excerpt}</p>
                  <div style={styles.postMeta}>
                    <span>{post.author}</span>
                    <span>{post.date} • {post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section style={styles.newsletter}>
          <h3 style={styles.newsletterTitle}>Stay Updated</h3>
          <p style={styles.newsletterText}>
            Get the latest insights and tips delivered directly to your inbox. Join thousands of consultancy professionals.
          </p>
          <div style={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.emailInput}
            />
            <button style={styles.subscribeButton}>
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;