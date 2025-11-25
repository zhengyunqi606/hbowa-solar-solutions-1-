import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// 1. 创建 SMTP 传输器
const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER, // 你的邮箱
    pass: process.env.SMTP_PASS, // 邮箱授权码（非登录密码）
  },
})

// ===== 临时打印：调试完删除或注释 =====
console.log('>>> SMTP_USER:', process.env.SMTP_USER)
console.log('>>> SMTP_PASS exists:', !!process.env.SMTP_PASS)
// =====================================

// 2. 处理 POST 请求
export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, country, message } = await req.json()

    await transporter.sendMail({
      from: `"HBOWA Web" <${process.env.SMTP_USER}>`,
      to: process.env.RECV_MAIL, // 收问卷的邮箱（可以和自己发件箱相同）
      subject: `New Inquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
      <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('Mail error:', err.message)
    return NextResponse.json({ ok: false, msg: err.message }, { status: 500 })
  }
}