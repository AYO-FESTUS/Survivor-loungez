import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import sanityClient from "../sanity";
import {
  specialistServices,
  domesticAbuseCharities,
  bameLedOrgs,
  legalImmigrationAdvice,
  housingWelfareSupport,
  mentalHealthGroupHealing,
  postCrisisReintegration,
  mentalHealthSocialReintegration,
  employmentSkillsReintegration,
  housingAdvocacyFloatingSupport,
} from "../lib/services";

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [sanityPosts, setSanityPosts] = useState([]);

  const staticPosts = [
    {
      title: "Static Blog 1",
      imageUrl: "/blog imag/Pretty Photos - Download Free High-Quality Picture.jpeg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet sapien at mi ullamcorper, non dignissim justo fermentum. Nullam dignissim sapien ut sapien finibus, ac imperdiet ex eleifend. Suspendisse potenti. Pellentesque eget sapien neque. Morbi in mauris vel ligula pulvinar cursus at a nisi. Proin a arcu sit amet turpis fermentum cursus a ut erat. Curabitur condimentum mi ut erat commodo, vitae cursus est ultrices. Morbi eget turpis sit amet libero dictum dictum vitae in diam.Cras tincidunt nibh sed ligula tincidunt, sed tempus ante mattis. In non laoreet neque. Suspendisse potenti. Integer ac lorem et ante sodales porttitor nec ut odio. Etiam vel felis eros. Phasellus tempor tortor a nulla hendrerit, sit amet sollicitudin justo lobortis. Proin at ante ligula. Cras semper, diam a gravida facilisis, dolor augue vehicula mauris, nec tincidunt ante purus sed odio.",
    },
    {
      title: "Static Blog 2",
      imageUrl: "/blog imag/Individual Therapy Sessions in Central Texas _ Tay.jpeg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elitNam mollis arcu vitae justo fringilla, nec volutpat dolor euismod. Nullam non velit vitae augue accumsan tincidunt. Curabitur fringilla erat ut imperdiet volutpat. Pellentesque fermentum diam ut vestibulum rutrum. Donec posuere, sapien eget aliquam dapibus, arcu libero fermentum nisi, et porttitor erat mi nec nulla. Integer at ultrices lacus. Vivamus viverra orci eu semper tempor.Maecenas id diam eu nulla fringilla commodo. Curabitur tristique, lacus sed iaculis rutrum, nisl neque cursus purus, a efficitur augue felis id urna. Suspendisse ut viverra elit, a porta velit. Morbi at metus et felis aliquam posuere. In lobortis congue felis vel faucibus. In ut tortor felis.",
    },
  ];

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"] | order(_createdAt desc){
          _id,
          title,
          "imageUrl": mainImage.asset->url,
          content
        }`
      )
      .then((data) => {
        console.log("Sanity Data:", data);
        setSanityPosts(data);
      })
      .catch(console.error);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const combinedPosts = [
    ...sanityPosts.map((post) => ({
      title: post.title,
      imageUrl: post.imageUrl,
      body: post.content,
      preview:
        post.content
          ?.map((block) =>
            block.children?.map((child) => child.text).join(" ")
          )
          .join(" ") || "No content.",
    })),
    ...staticPosts.map((post) => ({
      title: post.title,
      imageUrl: post.imageUrl,
      preview: post.text,
      body: null,
    })),
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-96">
        <img
          src="/hero imag/Premium Photo _ Group of people holding hand toget.jpeg"
          alt="People"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-3xl font-bold mb-4 md:text-5xl">
            Finding Your Feet Again
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl font-medium mb-6 tracking-wider">
            Services to help migrant women and young people needing mentorship
          </h2>
        </div>
      </section>

      {/* Blog Posts Section */}
      <div className="container mx-auto w-full px-4 py-8">
        <h1 className="text-5xl font-bold my-6 text-center text-gray-900">
          Blog Stories
        </h1>


        {combinedPosts.map((post, index) => {
          const words = post.preview.split(" ");
          const previewWords = words.slice(0, 45).join(" ");
          const hasMore = words.length > 45;
          const isExpanded = expandedIndex === index;

          return (
          
            <div
              key={index}
              className="bg-[#B89B5E]/70 shadow-md rounded p-4 mb-6 border-1"
            >
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-[880px] object-cover rounded mb-4"
                />
              )}

              <h2 className="text-3xl font-semibold mb-3 text-center text-gray-900">
                {post.title}
              </h2>

              <div className="mt-1 text-1xl text-black">
                {!isExpanded ? (
                  <>
                    {previewWords}
                    {hasMore && "..."}
                  </>
                ) : post.body ? (
                  <PortableText value={post.body} />
                ) : (
                  <p>{post.preview}</p>
                )}
              </div>

              {hasMore && (
                <div className="flex justify-end mt-2">
                  <button
                    className="flex items-center text-gray-900 focus:outline-none"
                    onClick={() => toggleExpand(index)}
                  >
                    <span className="text-sm font-medium mr-2">
                      {isExpanded ? "Read less" : "Read more"}
                    </span>
                    {isExpanded ? (
                      <FaChevronUp className="text-[#B89B5E]" />
                    ) : (
                      <FaChevronDown className="text-[#B89B5E]" />
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}

        {/* Helpline Section */}
        <section className="w-full mb-12">
          <div className="relative w-full h-[500px] mb-8">
            <img
              src="\blog imag\Servicio al cliente_ qué es y cómo brindar una ate.jpeg"
              alt="Emergency helplines support"
              className="absolute inset-0 w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold text-center px-4">
                Helplines & Emergency Contacts
              </h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-[#B89B5E] text-gray-900">
                <tr>
                  <th className="py-3 px-4 text-left">Organisation</th>
                  <th className="py-3 px-4 text-left">Service</th>
                  <th className="py-3 px-4 text-left">Contact</th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                <tr className="border-t">
                  <td className="py-3 px-4 font-bold">
                    National Domestic Abuse Helpline (Refuge)
                  </td>
                  <td className="py-3 px-4">24/7 confidential support</td>
                  <td className="py-3 px-4">
                    <a href="tel:08082000247" className="text-white-600 underline">
                      0808 2000 247
                    </a>
                  </td>
                </tr>
                <tr className="border-t text-gray-900">
                  <td className="py-3 px-4 font-bold">
                    Rights of Women – Legal Advice
                  </td>
                  <td className="py-3 px-4">Family & immigration law helplines</td>
                  <td className="py-3 px-4">
                    <a
                      href="https://rightsofwomen.org.uk/get-advice/"
                      className="text-white-600 underline"
                    >
                      See Advice Lines
                    </a>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-bold">
                    Greater Manchester Domestic Abuse Helpline
                  </td>
                  <td className="py-3 px-4">Local confidential support</td>
                  <td className="py-3 px-4">
                    <a href="tel:08002540909" className="text-gray-900 underline">
                      0800 254 0909
                    </a>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-bold">
                    Joint Council for the Welfare of Immigrants (JCWI)
                  </td>
                  <td className="py-3 px-4">Legal advice for irregular migrants</td>
                  <td className="py-3 px-4">
                    <a href="tel:02075537470" className="text-gray-900 underline">
                      020 7553 7470
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
