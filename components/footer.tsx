export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TV</span>
              </div>
              <span className="font-bold text-foreground">TechVision</span>
            </div>
            <p className="text-muted-foreground text-sm">デジタル変革を実現するITコンサルタント</p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">サービス</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  クラウド移行
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  DXコンサルティング
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  セキュリティ対策
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">企業</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  について
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  採用情報
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  ブログ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">法務</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  利用規約
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>© 2025 TechVision Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
