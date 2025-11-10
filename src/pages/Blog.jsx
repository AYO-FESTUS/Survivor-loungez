import React, { useState, useEffect, useCallback } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import sanityClient from "../sanity";

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [sanityPosts, setSanityPosts] = useState([]);
  const [error, setError] = useState(null);

  // REAL BLOG POSTS
  const staticPosts = [
    {
      title: "Finding Strength Together: The Heart Behind The Survivor’s Lounge",
      imageUrl: "/blog/woman.jpeg",
      text: `Let’s be honest life can be hard to navigate, especially when you’ve been through something painful or confusing.

At The Survivor’s Lounge, we believe no one should have to face those moments alone.

So many survivors of domestic abuse and young adults without mentors find themselves stuck unsure where to go, who to talk to, or how to start again. That’s why we’re here: to make sure you never have to figure it out all by yourself.

**What We Do**  
Everything starts with listening.  
We’ve created a calm, safe, non-judgmental space where you can talk, be heard, and find your next step forward without fear or pressure.

Here’s how we help:  
- **We Listen:** You talk, we listen with empathy, patience, and understanding.  
- **We Guide:** We help you make sense of what’s next and find clarity on your journey.  
- **We Connect**: We link you with trusted people and organisations who can offer the right kind of support.  
- **We Walk With You:** Through mentorship and encouragement, we help you rebuild your strength and confidence.

**Our Mission**  
Our mission is simple:  
To give survivors and young adults the **strength, clarity, and hope** to move forward through genuine support, practical guidance, and meaningful connections.

**Our Vision**  
We see a world where **no one is left to face pain, confusion, or uncertainty alone**.  
A world where healing, confidence, and growth are always within reach.

**What We Stand For**  
- **Compassion**: Every story matters.  
- **Clarity**: We help you see your next step clearly.  
- **Connection**: We build bridges that lead you to real support.  
- **Resilience**: We believe in your strength to rise again.  
- **Hope**: Because even after the hardest days, a brighter tomorrow is possible.

At The Survivor’s Lounge, we help you find your footing, your voice, and your way forward.  
**Healing starts with being heard and you’re safe here.**

**Ready to Take the Next Step?**  
If you’ve been through something painful or you’re simply searching for clarity and guidance, you don’t have to walk alone.  
Reach out today! Your healing journey can start right here, with us.  

[Get Support | Start Your Journey]`
    },
    {
      title: "5 Steps to Finding Yourself Again After a Difficult Season",
      imageUrl: "/blog/therapy-sesh.jpeg",
      text: `There’s a moment after the storm when everything feels quiet.  
Too quiet.  
You’ve survived what tried to break you maybe a painful relationship, a season of loss, or months of feeling stuck but now you’re left wondering, **“What comes next?”**

At The Survivor’s Lounge, we meet people in that quiet. It’s the place between what happened and what’s ahead, and though it may not feel like it, **it’s the perfect place to begin again**.

Here are **five gentle steps** to help you find yourself again after a difficult season.

---

**1. Give Yourself Permission to Feel**  
You’ve held it together for so long, maybe for others, maybe for survival.  
But healing begins when you allow yourself to feel.  
The anger, the sadness, the confusion, the numbness they’re all valid.  
Don’t rush your emotions or silence them. They’re not your weakness; they’re your truth trying to breathe.  
*Remember: You don’t have to fix everything today. Just start by feeling what’s real.*

---

**2. Speak Kindly to Yourself**  
If you spoke to your friend the way you sometimes speak to yourself, would they feel loved or judged?  
Healing often starts with changing your inner language.  
Replace **“I should be over this”** with **“I’m taking my time to heal.”**  
Replace **“I failed”** with **“I’m learning and growing.”**  
Every time you speak kindly to yourself, you remind your soul that it’s safe again.

---

**3. Reach Out. You Don’t Have to Do This Alone**  
Isolation feels like protection, but it can quietly deepen the pain.  
When you share your story, even a little, it opens a window for light to come in.  
Find someone safe to talk to.  
- A friend who listens.  
- A mentor who cares.  
- Or a space like **The Survivor’s Lounge**, where you can breathe, be heard, and feel understood.  

**There’s strength in letting someone walk with you.**

---

**4. Rediscover What Makes You Feel Alive**  
Sometimes healing looks like laughter on a day you didn’t expect to laugh.  
Or remembering the things you used to love music, art, reading, quiet walks, dancing in your room.  
These small moments aren’t distractions; they’re **restoration**.  
Each one whispers, **“You’re still here.”**  
Start small, but start somewhere.  
Your joy will find its way back to you, piece by piece.

---

**5. Take One Step Forward, No Matter How Small**  
Healing isn’t a straight line; it’s a gentle journey.  
Some days you’ll feel strong. Other days, not at all. **Both are okay.**  
What matters is the direction, not the speed.  
Celebrate every small step:  
- Getting out of bed  
- Eating well  
- Journaling  
- Asking for help  
They all count.  
Because **every step forward, no matter how tiny, is still movement toward the light.**

---

**Final Thought
Finding yourself again isn’t about becoming who you were before.  
It’s about **discovering who you’re becoming now**.  
And even if it feels slow or uncertain, **you’re doing better than you think**.  
One moment, one breath, one step at a time.  
You’re not behind. You’re healing.**

**Need Someone to Talk To?**  
If you’re in a season of rebuilding, **The Survivor’s Lounge is here to walk with you**.  
We offer a safe, understanding space where you can be heard, find clarity, and take your next steps toward healing.`
    }
  ];

  // GROQ Query
  const BLOG_QUERY = `*[_type == "blog"] | order(_createdAt desc){
    _id,
    title,
    "imageUrl": mainImage.asset->url,
    content
  }`;

  // Fetch initial posts
  const fetchPosts = useCallback(async () => {
    try {
      const data = await sanityClient.fetch(BLOG_QUERY, { cache: "no-store" });
      setSanityPosts(data);
      setError(null);
    } catch (err) {
      console.error("Sanity fetch error:", err);
      setError("Failed to load blog posts. Please try again later.");
    }
  }, []);

  // Real-time listener
  useEffect(() => {
    fetchPosts();

    const subscription = sanityClient.listen(BLOG_QUERY).subscribe((update) => {
      const result = update.result;
      if (!result) return;

      const newPost = {
        _id: result._id,
        title: result.title,
        imageUrl: result.imageUrl,
        content: result.content,
      };

      setSanityPosts((prev) => {
        const filtered = prev.filter((p) => p._id !== newPost._id);
        return [newPost, ...filtered];
      });
    });

    return () => subscription.unsubscribe();
  }, [fetchPosts]);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const combinedPosts = [
    ...sanityPosts.map((post) => ({
      id: post._id,
      title: post.title,
      imageUrl: post.imageUrl,
      body: post.content,
      preview:
        post.content
          ?.map((block) =>
            block.children?.map((child) => child.text).join(" ")
          )
          .join(" ") || "No content available.",
    })),
    ...staticPosts.map((post, i) => ({
      id: `static-${i}`,
      title: post.title,
      imageUrl: post.imageUrl,
      preview: post.text,
      body: null,
    })),
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative max-w-full h-56 md:h-96">
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
          <h2 className="text-base sm:text-lg md:text-xl font-medium mb-8 tracking-wider">
            Services to help migrant women and young people needing mentorship
          </h2>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-2xl md:text-3xl text-center mb-6 text-gray-800">
              Blog Stories
            </h2>
            {error && (
              <p className="mt-4 text-red-600 text-sm">{error}</p>
            )}
          </div>

          {combinedPosts.length === 0 && !error ? (
            <p className="text-center text-gray-500">Loading posts...</p>
          ) : (
            <div className="space-y-16">
              {combinedPosts.map((post, index) => {
                const words = post.preview.split(" ");
                const previewWords = words.slice(0, 45).join(" ");
                const hasMore = words.length > 45;
                const isExpanded = expandedIndex === index;

                return (
                  <div
                    key={post.id}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Text Content */}
                    <div className="order-2 md:order-none">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {post.title}
                      </h3>
                      <div className="text-gray-600 leading-relaxed mb-6 prose prose-sm md:prose-base max-w-none">
                        {!isExpanded ? (
                          <>
                            {previewWords}
                            {hasMore && "..."}
                          </>
                        ) : post.body ? (
                          <PortableText value={post.body} />
                        ) : (
                          // Render static post with formatting
                          <div
                            className="prose prose-sm md:prose-base max-w-none text-gray-600"
                            dangerouslySetInnerHTML={{
                              __html: post.preview
                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                                .replace(/\n\n/g, '</p><p class="mt-4">')
                                .replace(/\n/g, '<br>')
                                .replace(/---/g, '<hr class="my-6 border-gray-300">')
                                .replace(
                                  /\[Get Support \| Start Your Journey\]/g,
                                  '<a href="/contact" class="text-[#B89B5E] font-bold hover:underline">Get Support | Start Your Journey</a>'
                                )
                            }}
                          />
                        )}
                      </div>

                      {hasMore && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="inline-flex items-center text-[#B89B5E] font-medium hover:text-[#A4844E] transition"
                        >
                          {isExpanded ? "Read less" : "Read more"}
                          {isExpanded ? (
                            <FaChevronUp className="ml-1" />
                          ) : (
                            <FaChevronDown className="ml-1" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Image */}
                    <div className="order-1 md:order-none">
                      {post.imageUrl ? (
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                          loading={index < 3 ? "eager" : "lazy"}
                        />
                      ) : (
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
                          <span className="text-gray-500">No image</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Helpline Section */}
      <section className="w-full mt-4 mb-12">
        <div className="relative w-full h-[18rem] mb-8 bg-[url('/blog/helplines.jpeg')] bg-cover bg-no-repeat bg-center grid place-content-center md:h-[20rem]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <h2 className="text-white text-4xl font-bold text-center px-4 drop-shadow-lg">
            Helplines & Emergency Contacts
          </h2>
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
                  <a href="tel:08082000247" className="text-[#B89B5E] underline">
                    0808 2000 247
                  </a>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4 font-bold">
                  Rights of Women – Legal Advice
                </td>
                <td className="py-3 px-4">Family & immigration law helplines</td>
                <td className="py-3 px-4">
                  <a href="https://rightsofwomen.org.uk/get-advice/" className="text-[#B89B5E] underline">
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
                  <a href="tel:08002540909" className="text-[#B89B5E] underline">
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
                  <a href="tel:02075537470" className="text-[#B89B5E] underline">
                    020 7553 7470
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Blog;