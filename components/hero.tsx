export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-background via-background to-card/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              デジタル変革を
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                実現するパートナー
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mt-6 leading-relaxed max-w-xl">
              エンタープライズから中堅企業まで。あなたのビジネスの次の段階への成長を、テクノロジーの力で加速させます。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105">
              無料相談を予約
            </button>
            <button className="border border-primary/50 text-primary hover:bg-primary/10 px-8 py-4 rounded-lg font-semibold transition">
              サービスを詳しく見る
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div>
              <p className="text-2xl font-bold text-primary">150+</p>
              <p className="text-sm text-muted-foreground">プロジェクト実績</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">クライアント企業</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">15年</p>
              <p className="text-sm text-muted-foreground">業界経験</p>
            </div>
          </div>
        </div>

        {/* Right - Visual */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
            <div className="absolute inset-4 bg-card rounded-xl border border-border/50" />
            <div className="absolute inset-8 bg-gradient-to-br from-primary/10 to-transparent rounded-lg" />
            <svg className="w-full h-full p-12 text-primary/30" viewBox="0 0 200 200" fill="none" stroke="currentColor">
              <circle cx="100" cy="100" r="80" strokeWidth="1" />
              <circle cx="100" cy="100" r="60" strokeWidth="1" />
              <circle cx="100" cy="100" r="40" strokeWidth="1" />
              <path d="M100 20 L100 180 M20 100 L180 100" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
