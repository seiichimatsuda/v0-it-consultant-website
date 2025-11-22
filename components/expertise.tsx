export default function Expertise() {
  const expertise = [
    { category: "クラウドプラットフォーム", items: ["AWS", "Azure", "Google Cloud"] },
    { category: "エンタープライズシステム", items: ["SAP", "Oracle", "Salesforce"] },
    { category: "テクノロジー", items: ["AI/ML", "IoT", "ブロックチェーン"] },
    { category: "業界専門知識", items: ["金融", "製造", "小売・流通"] },
  ]

  return (
    <section id="expertise" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">専門領域</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            多様な業界とテクノロジーに対応した深い専門知識
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertise.map((exp, index) => (
            <div key={index} className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-lg font-bold text-primary mb-6">{exp.category}</h3>
              <div className="flex flex-wrap gap-3">
                {exp.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
