import absoluteUrl from 'next-absolute-url/index';
import Head from 'next/head';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import { GetServerSideProps } from 'next'
import fetch from 'isomorphic-fetch'
import { parse } from 'cookie'
import { siteTitle } from '../../consts';

interface PageProps {
  title: string
  html: string
  status: number
  origin: string
  url: string
}

interface PageParams extends ParsedUrlQuery {
  title: string
}

export const getServerSideProps: GetServerSideProps<PageProps, PageParams> = async ({ params, req}) => {
  try {
    const { origin } = absoluteUrl(req)
    const { auth } = parse(req.headers.cookie)
    const res = await fetch('https://europe-west3-yeruham-phone-book.cloudfunctions.net/page/' + encodeURI(params.title as string), { headers: { Authorization: auth } })
    return {
      props: {
        title: params.title,
        html: res.ok && (await res.json()).html,
        status: res.status,
        origin,
        url: decodeURI(origin + req.url),
      },
    }
  } catch (e) {
    return {
      props: {
        title: params.title,
        html: 'error',
        status: 200,
        origin,
        url: decodeURI(origin + req.url),
      },
    }
  }
}

export default function Page({ title, html, status, origin, url }) {
  const pageTitle = `${title} - ${siteTitle}`
  return <div dir="rtl">
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} key="title"/>
      <meta property="og:url" content={url} key="url"/>
      <meta property="og:image" content={`${origin}/logo.png`} key="image"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {
      status === 404
        ? <h3 className="notFound">הדף <span className="title">{title}</span> לא נמצא בספר הטלפונים</h3>
        : <div>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
    }
  </div>
}
