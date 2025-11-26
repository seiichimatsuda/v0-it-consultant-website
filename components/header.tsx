"use client"

import { useState } from "react"
import { Menu, X, User, LogOut } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface HeaderProps {
  user: {
    name?: string
    email?: string
  } | null
}

export default function Header({ user }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="MSL" width={80} height={40} className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/services" className="text-muted-foreground hover:text-foreground transition">
            サービス
          </Link>
          <Link href="/expertise" className="text-muted-foreground hover:text-foreground transition">
            専門分野
          </Link>
          <Link href="/cases" className="text-muted-foreground hover:text-foreground transition">
            事例
          </Link>
          <Link href="/team" className="text-muted-foreground hover:text-foreground transition">
            チーム
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
              >
                <User size={18} />
                <span className="max-w-[100px] truncate">{user.name || user.email}</span>
              </Link>
              <a
                href="/api/auth/logout"
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition"
              >
                <LogOut size={18} />
              </a>
            </div>
          ) : (
            <a
              href="/api/auth/login"
              className="bg-primary hover:bg-accent text-primary-foreground px-6 py-2 rounded-lg transition"
            >
              ログイン
            </a>
          )}

          <Link
            href="/contact"
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-2 rounded-lg transition border border-border"
          >
            お問い合わせ
          </Link>
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
            <Link
              href="/services"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              サービス
            </Link>
            <Link
              href="/expertise"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              専門分野
            </Link>
            <Link
              href="/cases"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              事例
            </Link>
            <Link
              href="/team"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              チーム
            </Link>

            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={18} />
                  <span>{user.name || user.email}</span>
                </Link>
                <a
                  href="/api/auth/logout"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <LogOut size={18} />
                  <span>ログアウト</span>
                </a>
              </>
            ) : (
              <a
                href="/api/auth/login"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg w-full text-center"
              >
                ログイン
              </a>
            )}

            <Link
              href="/contact"
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg w-full text-center border border-border"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
