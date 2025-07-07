import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import sanityClient from "../sanity";

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [sanityPosts, setSanityPosts] = useState([]);

  const staticPosts = [
    {
      title: "Static Blog 1",
      imageUrl: "/blog imag/Servicio al cliente_ qué es y cómo brindar una ate.jpeg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu libero quis libero vestibulum facilisis. Curabitur vehicula, odio at tincidunt dictum, lorem nisl finibus magna, et mattis purus mauris a felis. Fusce ac turpis ac magna fermentum fermentum. Integer sed tincidunt nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus at lectus sed neque ullamcorper fermentum."
    },
    {
      title: "Static Blog 2",
      imageUrl: "/blog imag/Individual Therapy Sessions in Central Texas _ Tay.jpeg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, praesentium error. At ducimus, ex a iure amet nihil eligendi labore odit, sit officiis fugit dolorem soluta, animi laboriosam. Est quaerat similique vero natus voluptate voluptatum, obcaecati tempora sunt a molestiae cum. Recusandae beatae corrupti et eveniet temporibus quos maiores deserunt veniam!"
    }
  ];

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "blog"] | order(_createdAt desc){
        _id,
        title,
        "imageUrl": mainImage.asset->url,
        body
      }`)
      .then((data) => setSanityPosts(data))
      .catch(console.error);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const combinedPosts = [
    ...sanityPosts.map((post) => ({
      title: post.title,
      imageUrl: post.imageUrl,
      text: post.body && post.body[0]?.children[0]?.text || "No content."
    })),
    ...staticPosts
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] mb-8">
        <img
          src="/hero imag/Premium Photo _ Group of people holding hand toget.jpeg"
          alt="People"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        {/* Content on top of background */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-3xl font-bold mb-4 md:text-5xl">
            Finding Your Feet Again
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl font-medium mb-6 tracking-wider">
            Services to help women and young adults after crisis care.
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-medium tracking-wider">
            When emergency support ends, we connect survivors with practical and emotional pathways to rebuild, heal, and thrive.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Blog Stories</h1>
        {combinedPosts.map((post, index) => {
          const words = post.text.split(" ");
          const previewWords = words.slice(0, 45).join(" ");
          const hasMore = words.length > 45;
          const isExpanded = expandedIndex === index;

          return (
            <div key={index} className="bg-white shadow-md rounded p-4 mb-6">
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              )}

              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

              <p className="mt-2 text-gray-700">
                {!isExpanded ? (
                  <>
                    {previewWords}
                    {hasMore && "..."}
                  </>
                ) : (
                  post.text
                )}
              </p>

              {hasMore && (
                <div className="flex justify-end mt-2">
                  <button
                    className="flex items-center text-blue-600 focus:outline-none"
                    onClick={() => toggleExpand(index)}
                  >
                    <span className="text-sm font-medium mr-2">
                      {isExpanded ? "Show less" : "Read more"}
                    </span>
                    {isExpanded ? (
                      <FaChevronUp className="text-blue-600" />
                    ) : (
                      <FaChevronDown className="text-blue-600" />
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}

        {/* UK Organisations & Services Section */}
        <section className="max-w-4xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#B89B5E]">
            UK Organisations & Services Aligning with TSL’s Mission
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl mb-8">
            list of UK organisations supporting migrant women and young adults with NRPF post-crisis, grouped by focus area with links and contact details. </p>

          {/* Insert the categories here exactly as built previously */}
          {/* Example: Specialist Services */}
          {/* Specialist Services for Migrant Women with NRPF */}
<div className="text-left mb-8">
  <h3 className="text-2xl font-bold text-[#B89B5E] mb-2">Specialist Services for Migrant Women with NRPF</h3>
  <ul className="space-y-4 text-gray-700">
    <li>
      <strong>Southall Black Sisters (SBS) – No Recourse Fund:</strong><br />
      Emergency financial support for refuge/safe accommodation.<br />
      <a href="https://southallblacksisters.org.uk/our-services/sbs-norecourse-fund" className="text-blue-600 underline">southallblacksisters.org.uk</a>
    </li>
    <li>
      <strong>NRPF Network – Support for Domestic Abuse Survivors:</strong><br />
      Info/advice and Support for Migrant Victims Scheme (safe accommodation up to 12 weeks).<br />
      <a href="https://www.nrpfnetwork.org.uk/information-and-resources/support-for-survivors-of-domestic-abuse" className="text-blue-600 underline">nrpfnetwork.org.uk</a>
    </li>
    <li>
      <strong>Right to Remain – Migration Toolkit:</strong><br />
      Guides on DVILR, MVDAC, appeals, legal aid resources.<br />
      <a href="https://righttoremain.org.uk/toolkit/migrants-affected-by-domestic-abuse" className="text-blue-600 underline">righttoremain.org.uk</a>
    </li>
  </ul>
</div>

{/* Domestic Abuse Charities with Specialist Support */}
<div className="text-left mb-8">
  <h3 className="text-2xl font-bold text-[#B89B5E] mb-2">Domestic Abuse Charities with Specialist Support</h3>
  <ul className="space-y-4 text-gray-700">
    <li>
      <strong>Refuge – National Domestic Abuse Helpline:</strong><br />
      Free 24/7 helpline and national support referral.<br />
      <a href="https://refuge.org.uk" className="text-blue-600 underline">refuge.org.uk</a>
    </li>
    <li>
      <strong>Women’s Aid:</strong><br />
      Localised refuge search, community groups, advice.<br />
      <a href="https://womensaid.org.uk" className="text-blue-600 underline">womensaid.org.uk</a>
    </li>
    <li>
      <strong>City Hearts:</strong><br />
      Support for trafficking/domestic violence, counselling, housing, training.<br />
      <a href="https://cityhearts.global" className="text-blue-600 underline">cityhearts.global</a>
    </li>
  </ul>
</div>

{/* By- and For-Migrant or BAME-Led Organisations */}
<div className="text-left mb-8">
  <h3 className="text-2xl font-bold text-[#B89B5E] mb-2">By- and For-Migrant or BAME-Led Organisations</h3>
  <ul className="space-y-4 text-gray-700">
    <li>
      <strong>Sistah Space:</strong><br />
      Support for African and Caribbean heritage women affected by domestic abuse.<br />
      <a href="https://sistahspace.org" className="text-blue-600 underline">sistahspace.org</a>
    </li>
    <li>
      <strong>London Black Women’s Project (LBWP):</strong><br />
      Refuge, counselling, legal advice for Black and minoritised women in East London.<br />
      <a href="https://lbwp.co" className="text-blue-600 underline">lbwp.co</a>
    </li>
    <li>
      <strong>The Angelou Centre:</strong><br />
      Personal development, counselling, legal support for BAME/refugee women in Newcastle.<br />
      <a href="https://angelou-centre.org.uk" className="text-blue-600 underline">angelou-centre.org.uk</a>
    </li>
    <li>
      <strong>Shakti Women’s Aid:</strong><br />
      Helpline, advocacy, multilingual support for BME women in Scotland.<br />
      <a href="https://shaktiedinburgh.co.uk" className="text-blue-600 underline">shaktiedinburgh.co.uk</a>
    </li>
  </ul>
</div>

{/* Legal & Immigration Advice */}
<div className="text-left mb-8">
  <h3 className="text-2xl font-bold text-[#B89B5E] mb-2">Legal & Immigration Advice</h3>
  <ul className="space-y-4 text-gray-700">
    <li>
      <strong>Rights of Women:</strong><br />
      Specialist telephone helplines for family, criminal, immigration law.<br />
      <a href="https://rightsofwomen.org.uk" className="text-blue-600 underline">rightsofwomen.org.uk</a>
    </li>
    <li>
      <strong>Joint Council for the Welfare of Immigrants (JCWI):</strong><br />
      Free legal advice for irregular migrants and domestic workers with uncertain status.<br />
      <a href="https://jcwi.org.uk" className="text-blue-600 underline">jcwi.org.uk</a>
    </li>
    <li>
      <strong>Migrant Help:</strong><br />
      Advice on asylum support, trafficking, housing, benefits, and domestic abuse.<br />
      <a href="https://migranthelpuk.org" className="text-blue-600 underline">migranthelpuk.org</a>
    </li>
  </ul>
</div>

{/* Housing & Welfare Support */}
<div className="text-left mb-8">
  <h3 className="text-2xl font-bold text-[#B89B5E] mb-2">Housing & Welfare Support</h3>
  <ul className="space-y-4 text-gray-700">
    <li>
      <strong>Home Office – Support for Migrant Victims Scheme:</strong><br />
      Temporary accommodation and support via referrals for those with NRPF.<br />
      <a href="https://www.nrpfnetwork.org.uk/information-and-resources/support-for-survivors-of-domestic-abuse" className="text-blue-600 underline">Refer via NRPF Network</a>
    </li>
    <li>
      <strong>Newham Council (example):</strong><br />
      Limited emergency social care support; varies by borough.<br />
      <a href="https://www.newham.gov.uk/Pages/Services/Support-for-people-with-no-recourse-to-public-funds.aspx" className="text-blue-600 underline">newham.gov.uk</a>
    </li>
  </ul>
</div>

{/* Mental Health & Group Healing */}
<div className="text-left mb-8">
  <h3 className="text-2xl font-bold text-[#B89B5E] mb-2">Mental Health & Group Healing</h3>
  <ul className="space-y-4 text-gray-700">
    <li>
      <strong>NIA (Ending VAWG Coalition):</strong><br />
      Group counselling, legal advice, post-refuge housing and advocacy in London.<br />
      <a href="https://niaendingviolence.org.uk" className="text-blue-600 underline">niaendingviolence.org.uk</a>
    </li>
    <li>
      <strong>End Violence Against Women Coalition (EVAW):</strong><br />
      National policy, advocacy, networking for specialist organisations including migrant-focused groups.<br />
      <a href="https://endviolenceagainstwomen.org.uk" className="text-blue-600 underline">endviolenceagainstwomen.org.uk</a>
    </li>
  </ul>
</div>

{/* Post-Crisis Reintegration Support */}
<div className="text-left mb-8">
  <h3 className="text-2xl font-bold text-[#B89B5E] mb-2">Post-Crisis Reintegration Support</h3>
  <ul className="space-y-4 text-gray-700">
    <li>
      <strong>Solace Women’s Aid – North London:</strong><br />
      Advocacy, therapeutic groups, floating support for survivors no longer in refuge.<br />
      <a href="https://solacewomensaid.org" className="text-blue-600 underline">solacewomensaid.org</a>
    </li>
    <li>
      <strong>Hestia:</strong><br />
      Moves clients from refuge to independence; offers Restart packs, confidence courses.<br />
      <a href="https://hestia.org" className="text-blue-600 underline">hestia.org</a>
    </li>
    <li>
      <strong>Women’s Trust:</strong><br />
      Low-cost or free counselling (trauma-informed) for women affected by domestic abuse.<br />
      <a href="https://womenstrust.org.uk" className="text-blue-600 underline">womenstrust.org.uk</a>
    </li>
    <li>
      <strong>SafeLives – “Your Best Life” Project:</strong><br />
      Long-term recovery, economic empowerment, community support post-abuse.<br />
      <a href="https://safelives.org.uk" className="text-blue-600 underline">safelives.org.uk</a>
    </li>
  </ul>
</div>

{/* Employment, Skills & Reintegration Pathways */}
<div className="text-left mb-8">
  <h3 className="text-2xl font-bold text-[#B89B5E] mb-2">Employment, Skills & Reintegration Pathways</h3>
  <ul className="space-y-4 text-gray-700">
    <li>
      <strong>Smart Works:</strong><br />
      Clothing and confidence coaching for women re-entering work.<br />
      <a href="https://smartworks.org.uk" className="text-blue-600 underline">smartworks.org.uk</a>
    </li>
    <li>
      <strong>Working Chance:</strong><br />
      Employability support for women with convictions or histories of abuse.<br />
      <a href="https://workingchance.org" className="text-blue-600 underline">workingchance.org</a>
    </li>
    <li>
      <strong>Women Into Construction:</strong><br />
      Supports women facing barriers (including trauma survivors) into male-dominated sectors.<br />
      <a href="https://women-into-construction.org" className="text-blue-600 underline">women-into-construction.org</a>
    </li>
  </ul>
</div>

{/* Mental Health & Social Reintegration */}
<div className="text-left mb-8">
  <h3 className="text-2xl font-bold text-[#B89B5E] mb-2">Mental Health & Social Reintegration</h3>
  <ul className="space-y-4 text-gray-700">
    <li>
      <strong>Mind:</strong><br />
      Local peer groups, trauma support, social prescribing referrals.<br />
      <a href="https://mind.org.uk" className="text-blue-600 underline">mind.org.uk</a>
    </li>
    <li>
      <strong>The Maya Centre (Islington):</strong><br />
      Free long-term counselling for women recovering from trauma.<br />
      <a href="https://mayacentre.org.uk" className="text-blue-600 underline">mayacentre.org.uk</a>
    </li>
  </ul>
</div>

{/* Housing, Advocacy & Floating Support */}
<div className="text-left mb-8">
  <h3 className="text-2xl font-bold text-[#B89B5E] mb-2">Housing, Advocacy & Floating Support</h3>
  <ul className="space-y-4 text-gray-700">
    <li>
      <strong>Standing Together Against Domestic Abuse:</strong><br />
      Coordinates housing and community response for post-refuge clients.<br />
      <a href="https://standingtogether.org.uk" className="text-blue-600 underline">standingtogether.org.uk</a>
    </li>
    <li>
      <strong>Shelter (London):</strong><br />
      Housing rights advice and emergency housing pathways.<br />
      <a href="https://england.shelter.org.uk" className="text-blue-600 underline">england.shelter.org.uk</a>
    </li>
  </ul>
</div>

          {/* Repeat the same pattern for all other categories you shared earlier */}
          {/* Domestic Abuse, BAME-Led Orgs, Legal & Immigration, Housing, Mental Health, etc. */}
        </section>

        <section className="w-full mb-12">
  {/* Section image */}
  <div className="relative w-full h-[50vh] mb-8">
    <img
      src="/path/to/your/helpline-banner.jpg" // Replace with your actual image path
      alt="Emergency helplines support"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <h2 className="text-white text-4xl font-bold text-center px-4">Key Helplines & Emergency Contacts</h2>
    </div>
  </div>

  {/* Helplines table */}
  <div className="max-w-4xl mx-auto px-4">
    <table className="min-w-full border border-gray-300">
      <thead className="bg-[#B89B5E] text-white">
        <tr>
          <th className="py-3 px-4 text-left">Organisation</th>
          <th className="py-3 px-4 text-left">Service</th>
          <th className="py-3 px-4 text-left">Contact</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        <tr className="border-t">
          <td className="py-3 px-4 font-bold">National Domestic Abuse Helpline (Refuge)</td>
          <td className="py-3 px-4">24/7 confidential support</td>
          <td className="py-3 px-4"><a href="tel:08082000247" className="text-blue-600 underline">0808 2000 247</a></td>
        </tr>
        <tr className="border-t">
          <td className="py-3 px-4 font-bold">Rights of Women – Legal Advice</td>
          <td className="py-3 px-4">Family & immigration law helplines</td>
          <td className="py-3 px-4"><a href="https://rightsofwomen.org.uk/get-advice/" className="text-blue-600 underline">See Advice Lines</a></td>
        </tr>
        <tr className="border-t">
          <td className="py-3 px-4 font-bold">Greater Manchester Domestic Abuse Helpline</td>
          <td className="py-3 px-4">Local confidential support</td>
          <td className="py-3 px-4"><a href="tel:08002540909" className="text-blue-600 underline">0800 254 0909</a></td>
        </tr>
        <tr className="border-t">
          <td className="py-3 px-4 font-bold">Joint Council for the Welfare of Immigrants (JCWI)</td>
          <td className="py-3 px-4">Legal advice for irregular migrants</td>
          <td className="py-3 px-4"><a href="tel:02075537470" className="text-blue-600 underline">020 7553 7470</a></td>
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
