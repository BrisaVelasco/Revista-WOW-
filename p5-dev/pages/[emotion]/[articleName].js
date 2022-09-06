// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// route http://localhost:3000/[emotion]/[articleName]

import { useRouter } from "next/router";
import Head from "next/head";
import ArticleComponent from "../../Components/Article/ArticleComponent";

export default function Article({news}) {
  const router = useRouter();
  const { articleName } = router.query;
  console.log("SOY ROUTER", router);

  return (
    <>
      <Head>
        <title>{articleName}</title>
      </Head>
     <ArticleComponent news={news} />
    </>
  );
}

export async function getServerSideProps({params}) {
  const req = await fetch(`http://localhost:3001/api/news/${params.emotion}`);
  const data = await req.json();
  // console.log("🚀 ~ file: [articleName].js ~ line 33 ~ getServerSideProps ~ data", data)
  return { props: { news: data } };
}