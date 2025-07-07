import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../sanity";
import { PortableText } from "@portabletext/react";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog" && slug.current == $slug][0]{
          title,
          content,
          mainImage{asset->{url}},
          createdAt
        }`,
        { slug }
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-center">{post.title}</h1>
      <p className="text-gray-500 mb-4 text-center">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      {post.mainImage?.asset?.url && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="w-full h-auto rounded mb-6"
        />
      )}
      <article className="pros max-w-none">
        <PortableText value={post.content} />
      </article>
    </div>
  );
};

export default BlogPost;
