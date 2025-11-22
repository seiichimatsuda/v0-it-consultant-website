export default function Team() {
  const team = [
    {
      name: "田中 太郎",
      role: "CEO & シニアコンサルタント",
      bio: "20年以上のエンタープライズIT経験。大手SIerでの経歴を経て、2010年に創業。",
    },
    {
      name: "鈴木 花子",
      role: "CTO & アーキテクチャ戦略部長",
      bio: "AWS認定ソリューションアーキテクト。クラウド技術とシステム設計の専門家。",
    },
    {
      name: "佐藤 次郎",
      role: "デジタル変革推進部長",
      bio: "DX戦略とビジネス最適化のスペシャリスト。50社以上の変革を支援。",
    },
    {
      name: "伊藤 美咲",
      role: "セキュリティ & コンプライアンス部長",
      bio: "CISM認定。金融業界でのセキュリティ対策実績を多数保有。",
    },
  ]

  return (
    <section id="team" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">チーム</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            豊富な経験と専門知識を持つコンサルタント集団
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
