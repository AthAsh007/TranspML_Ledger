import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Pagination from "@layouts/components/Pagination";
import Post from "@layouts/partials/Post";
import Sidebar from "@layouts/partials/Sidebar";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import dateFormat from "@lib/utils/dateFormat";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import { ethers } from "ethers";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaRegCalendar } from "react-icons/fa";
const { blog_folder, pagination } = config.settings;
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

const Home = ({
  banner,
  posts,
  featured_posts,
  recent_posts,
  categories,
  promotion,
}) => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(['user_account']);
  // define state
  const [signer, setSigner] = useState();

  useEffect(() => {
      connectToMetaMask();
      console.log(cookies);
  }, [cookies]);

  const create = async (data) => {
    cookies().set('name', 'Hello');
  }

  const connectToMetaMask = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      setSigner(signer);
      let signer_address = await signer.getAddress();
      console.log("Account:", signer_address);
      setCookie('user_account', signer_address, {
        path: '/',
      });
      router.replace("/");
    } catch (err) {
      console.error(err);
    }
  };
  const sortPostByDate = sortByDate(posts);
  const featuredPosts = sortPostByDate.filter(
    (post) => post.frontmatter.featured
  );
  const showPosts = pagination;

  return (
    <Base>
      {/* Banner */}
      <section className="section banner relative pb-0">
        <ImageFallback
          className="absolute bottom-0 left-0 z-[-1] w-full"
          src={"/images/banner-bg-shape.svg"}
          width={1905}
          height={295}
          alt="banner-shape"
          priority
        />

        <div className="container">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div
              className={
                banner.image_enable
                  ? "mt-12 text-center lg:col-6 lg:mt-0 lg:text-left"
                  : "mt-12 text-center lg:col-12 lg:mt-0 lg:text-left"
              }
            >
              <div className="banner-title">
                {markdownify(banner.title, "h1")}
                {markdownify(banner.title_small, "span")}
              </div>
              {markdownify(banner.content, "p", "mt-4")}
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-6"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
            </div>
            {banner.image_enable && (
              <div className="col-9 lg:col-6">
                <ImageFallback
                  className="mx-auto object-contain"
                  src={"/images/HomeUi.png"}
                  width={548}
                  height={443}
                  priority={true}
                  alt="Banner Image"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Home main */}
      <section className="section">
        <div className="container">
          <h1>Welcome Back! You're Now Logged In.</h1>
        </div>
        <div className="container">
          <div className="row items-start">
            <div className="w-full">
              <div className="section">
                {markdownify(
                  "Welcome to the Future of AI Exploration!",
                  "h4",
                  "section-title"
                )}
                <div class="w-3/4 rounded border border-border p-6 dark:border-darkmode-border">
                  <div className="row">
                    <p>
                      Unleash the Power of Machine Learning with our
                      Cutting-edge Platform. Dive into a World where Innovation
                      meets Blockchain, and where MetaMask is your Passport to
                      Limitless Possibilities. Explore, Create, and Transform
                      Your Ideas into Reality – One Smart Contract at a Time.
                      Your Journey Starts Here
                    </p>
                  </div>
                </div>
                <div class="mt-3 w-3/4 rounded border border-border p-6 dark:border-darkmode-border">
                  <div className="row">
                    <p>
                      Unlock the door to a realm where the boundaries between
                      artificial intelligence and blockchain dissolve. Our
                      platform is not just about running code; it's about
                      sculpting the future. Dive deep, transact securely with
                      MetaMask, and be the architect of your machine learning
                      destiny
                    </p>
                  </div>
                </div>
              </div>

              {/* Featured posts */}
              {featured_posts.disable && (
                <div className="section">
                  {markdownify(featured_posts.title, "h2", "section-title")}
                  <div className="rounded border border-border p-6 dark:border-darkmode-border">
                    <div className="row">
                      <div className="md:col-6">
                        <Post post={featuredPosts[0]} />
                      </div>
                      <div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border md:col-6 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0">
                        {featuredPosts
                          .slice(1, featuredPosts.length)
                          .map((post, i, arr) => (
                            <div
                              className={`mb-6 flex items-center pb-6 ${
                                i !== arr.length - 1 &&
                                "border-b border-border dark:border-darkmode-border"
                              }`}
                              key={`key-${i}`}
                            >
                              {post.frontmatter.image && (
                                <ImageFallback
                                  className="mr-3 h-[85px] rounded object-cover"
                                  src={post.frontmatter.image}
                                  alt={post.frontmatter.title}
                                  width={105}
                                  height={85}
                                />
                              )}
                              <div>
                                <h3 className="h5 mb-2">
                                  <Link
                                    href={`/${blog_folder}/${post.slug}`}
                                    className="block hover:text-primary"
                                  >
                                    {post.frontmatter.title}
                                  </Link>
                                </h3>
                                <p className="inline-flex items-center font-bold">
                                  <FaRegCalendar className="mr-1.5" />
                                  {dateFormat(post.frontmatter.date)}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Promotion */}
              {promotion.disable && (
                <Link href={promotion.link} className="section block pt-0">
                  <ImageFallback
                    className="h-full w-full"
                    height="115"
                    width="800"
                    src={promotion.image}
                    alt="promotion"
                  />
                </Link>
              )}

              {/* Recent Posts */}
              {recent_posts.disable && (
                <div className="section pt-0">
                  {markdownify(recent_posts.title, "h2", "section-title")}
                  <div className="rounded border border-border px-6 pt-6 dark:border-darkmode-border">
                    <div className="row">
                      {sortPostByDate.slice(0, showPosts).map((post) => (
                        <div className="mb-8 md:col-6" key={post.slug}>
                          <Post post={post} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* <Pagination
                totalPages={Math.ceil(posts.length / showPosts)}
                currentPage={1}
              /> */}
            </div>
            {/* sidebar */}
            {/* <Sidebar
              className={"lg:mt-[9.5rem]"}
              posts={posts}
              categories={categories}
            /> */}
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, featured_posts, recent_posts, promotion } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");

  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });

  return {
    props: {
      banner: banner,
      posts: posts,
      featured_posts,
      recent_posts,
      promotion,
      categories: categoriesWithPostsCount,
    },
  };
};
