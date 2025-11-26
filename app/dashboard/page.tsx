import { getSession } from "@/lib/auth0"
import { redirect } from "next/navigation"
import { User, Mail, Calendar, Shield } from "lucide-react"

export default async function DashboardPage() {
  const session = await getSession()

  if (!session?.user) {
    redirect("/api/auth/login")
  }

  const user = session.user

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-foreground mb-8">マイダッシュボード</h1>

        <div className="bg-card rounded-2xl border border-border p-8 mb-8">
          <div className="flex items-center gap-6 mb-8">
            {user.picture ? (
              <img
                src={user.picture || "/placeholder.svg"}
                alt={user.name || "User"}
                className="w-20 h-20 rounded-full object-cover"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <User size={32} className="text-primary" />
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold text-foreground">{user.name || "ユーザー"}</h2>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">メールアドレス</p>
                <p className="text-foreground font-medium">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">認証状態</p>
                <p className="text-foreground font-medium">認証済み</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">セッション有効期限</p>
                <p className="text-foreground font-medium">
                  {session.expiresAt ? new Date(session.expiresAt).toLocaleDateString("ja-JP") : "不明"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <User size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ユーザーID</p>
                <p className="text-foreground font-medium text-sm truncate max-w-[200px]">{user.sub}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">お問い合わせ履歴</h3>
          <p className="text-muted-foreground">まだお問い合わせはありません。</p>
        </div>
      </div>
    </main>
  )
}
