import { getGlobalData } from '../../utils/global-data';
import {
  getPostBySlug,
} from '../../utils/mdx-utils';
import ReactMarkdown from 'react-markdown';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';


const components = {
  a: CustomLink,
  Head,
};

export default function PostPage({
  posts,
  globalData,
}) {
  return (
    <Layout>
      <SEO
        title={`${posts.title} - ${globalData.name}`}
        description={posts.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {posts?.title}
          </h1>
        </header>
        <main>
          <article className="prose dark:prose-dark text-justify mx-auto  max-w-4xl space-y-7">
          <ReactMarkdown>{posts.body}</ReactMarkdown>
          </article>
        </main>
        <footer className="mt-12 text-center text-gray-600 dark:text-gray-300">
      <p className="text-sm">
        <span className="font-semibold">{posts?.creator}</span> -
        {new Date(posts.created_at).toLocaleDateString('pt-BR', { 
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })}
      </p>
    </footer>
      </article>

      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const posts = await getPostBySlug(params.id);
 

  return {
    props: {
      globalData,
      posts,
    },
  };
};

