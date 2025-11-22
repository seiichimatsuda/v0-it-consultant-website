import { CloudIcon, BarChart3, Lock, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: CloudIcon,
      title: "クラウド移行戦略",
      description: "レガシーシステムからクラウドへの段階的な移行計画と実装をサポート。",
    },
    {
      icon: BarChart3,
      title: "デジタル変革コンサルティング",
      description: "ビジネスプロセスの最適化とDXの推進で、競争力強化を実現。",
    },
    {
      icon: Lock,
      title: "セキュリティ & コンプライアンス",
      description: "最新のセキュリティ基準に対応し、リスク最小化を実現します。",
    },
    {
      icon: Zap,
      title: "システム最適化",
      description: "レガシーシステムの現代化と性能改善で、効率を大幅向上。",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">主要サービス</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            エンタープライズレベルの課題に対応した包括的なITコンサルティングサービス
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
