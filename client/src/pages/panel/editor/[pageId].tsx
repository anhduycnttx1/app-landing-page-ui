import React from 'react'
import { useRouter } from 'next/router'
import { EditorLayout } from '../../../layouts'
import Head from 'next/head'
import EditorContainer from '../../../containers/editor-page'

export default function EditorPages() {
  const router = useRouter()
  const { pageId } = router.query
  return (
    <>
      <Head>
        <title>{pageId} | Page Builder</title>
      </Head>
      <EditorContainer pageId={pageId} />
    </>
  )
}

EditorPages.getLayout = (page: React.ReactElement) => {
  return <EditorLayout>{page}</EditorLayout>
}
