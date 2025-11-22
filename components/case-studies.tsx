export default function CaseStudies() {
  const cases = [
    {
      company: "大手金融機関A社",
      title: "クラウド移行で年間3億円のコスト削減",
      description: "レガシーシステムからAWSへの段階的移行により、インフラコストを50%削減。システム処理速度は3倍向上。",
      result: "ROI 180%達成",
    },
    {
      company: "製造業大手B社",
      title: "AIを活用した生産効率化",
      description: "製造ラインにAIカメラを導入し、品質検査の自動化を実現。人手不足への対応と品質向上を同時達成。",
      result: "生産効率 35%向上",
    },
    {
      company: "小売チェーンC社",
      title: "デジタルマーケティング基盤構築",
      description: "オムニチャネル対応のマーケティングプラットフォームを構築。顧客体験の向上と売上増加を実現。",
      result: "売上 25%増加",
    },
    {
      company: "FinTechスタートアップD社",
      title: "グローバルスケーリング支援",
      description: "マイクロサービスアーキテクチャへの移行と、3地域展開のためのインフラ構築を支援。",
      result: "ユーザー数 100倍へスケール",
    },
  ]

  return (
    <section id="cases" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">事例紹介</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            様々な業界でのコンサルティング実績と成功事例
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition">
              <div className="text-sm text-primary font-semibold mb-2">{caseItem.company}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{caseItem.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{caseItem.description}</p>
              <div className="pt-4 border-t border-border/50">
                <p className="text-primary font-semibold">{caseItem.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
