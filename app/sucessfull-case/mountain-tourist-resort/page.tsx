// app/sucessfull-case/mountain-tourist-resort/page.tsx
"use client"
import { useState, useEffect } from "react"

export default function ResortPage() {
  const [content, setContent] = useState("")
  const [image, setImage] = useState("")

  useEffect(() => {
    fetch("https://axiasolar.com/wp-json/wp/v2/hhommee?slug=mountain-tourist-resort")
      .then((res) => res.json())
      .then(async (data) => {
        if (data && data.length > 0) {
          // 1. 正文
          setContent(data[0].content.rendered)

          // 2. 特色图片
          if (data[0].featured_media) {
            const mediaRes = await fetch(`https://axiasolar.com/wp-json/wp/v2/media/${data[0].featured_media}`)
            const mediaData = await mediaRes.json()
            setImage(mediaData.source_url)
          }
        } else {
          setContent("未找到内容，请检查 slug 是否正确")
        }
      })
      .catch((err) => {
        console.error("加载内容失败:", err)
        setContent("内容加载失败")
      })
  }, [])

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* 主图 */}
      {image && (
        <img
          src={image}
          alt="Mountain Tourist Resort"
          className="w-full h-auto mb-6 rounded-lg"
        />
      )}

      <h1 className="text-3xl font-bold mb-6">Mountain Tourist Resort</h1>

      {/* 渲染 WordPress 正文（含超链接） */}
      <div
        className="prose prose-slate max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}