"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">お問い合わせ</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ご不明な点や無料相談のご依頼など、お気軽にお問い合わせください
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <Mail className="text-primary mx-auto mb-4" size={32} />
            <h3 className="font-bold text-foreground mb-2">メール</h3>
            <p className="text-muted-foreground">info@techvision.jp</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <Phone className="text-primary mx-auto mb-4" size={32} />
            <h3 className="font-bold text-foreground mb-2">電話</h3>
            <p className="text-muted-foreground">03-xxxx-xxxx</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <MapPin className="text-primary mx-auto mb-4" size={32} />
            <h3 className="font-bold text-foreground mb-2">住所</h3>
            <p className="text-muted-foreground">東京都渋谷区xx-xx</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-foreground font-semibold mb-2">お名前</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">メールアドレス</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">会社名</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">お問い合わせ内容</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-accent text-primary-foreground py-3 rounded-lg font-semibold transition"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
