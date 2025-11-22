"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">TV</span>
          </div>
          <span className="text-lg font-bold text-foreground">TechVision</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition">
            サービス
          </a>
          <a href="#expertise" className="text-muted-foreground hover:text-foreground transition">
            専門分野
          </a>
          <a href="#cases" className="text-muted-foreground hover:text-foreground transition">
            事例
          </a>
          <a href="#team" className="text-muted-foreground hover:text-foreground transition">
            チーム
          </a>
          <button className="bg-primary hover:bg-accent text-primary-foreground px-6 py-2 rounded-lg transition">
            お問い合わせ
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <nav className="flex flex-col p-4 gap-4">
            <a href="#services" className="text-muted-foreground hover:text-foreground">
              サービス
            </a>
            <a href="#expertise" className="text-muted-foreground hover:text-foreground">
              専門分野
            </a>
            <a href="#cases" className="text-muted-foreground hover:text-foreground">
              事例
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground">
              チーム
            </a>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg w-full">お問い合わせ</button>
          </nav>
        </div>
      )}
    </header>
  )
}
