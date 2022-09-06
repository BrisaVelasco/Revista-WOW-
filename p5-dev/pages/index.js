import css from "../styles/Home.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import { OrbitControls, useTexture, Text, Box } from "@react-three/drei";
import Sun from "../Components/Sun/Sun";
import Head from "next/head";
import Main from "../Components/Main/MainComponent";
import LatestNews from "../Components/LatestNews/LatestNews";
import { useRouter } from "next/router";
import { ArticleWideScreen } from "../Components/ArticleWideScreen/ArticleWideScreen";

export default function Home({newses}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>WOW! MAG</title>
      </Head>
      <ArticleWideScreen/>
      <LatestNews />
          <Main />
          <Box id="theSun">
          <Sun newses={newses} css={css} />
          </Box>
    </>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`http://localhost:3001/api/news/`);
  const data = await req.json();
  return { props: { newses: data } };
}
