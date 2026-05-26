export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Discord Productivity Tool
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Turn Discord Messages into
          <span className="text-[#58a6ff]"> Organized Task Threads</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          A Discord bot that watches your server for task patterns — @mentions and due dates — and automatically spins up structured threads so nothing falls through the cracks.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get Started — $15/mo
        </a>
        <div className="mt-12 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="text-xs text-[#8b949e] mb-2 font-mono"># dev-general</div>
          <div className="space-y-3 font-mono text-sm">
            <div>
              <span className="text-[#79c0ff]">@alice</span>
              <span className="text-[#c9d1d9]"> fix login bug due: Friday</span>
            </div>
            <div className="flex items-center gap-2 text-[#3fb950]">
              <span>✓</span>
              <span>Thread created: &quot;Fix login bug — due Fri&quot; assigned to alice</span>
            </div>
            <div>
              <span className="text-[#79c0ff]">@bob</span>
              <span className="text-[#c9d1d9]"> deploy staging by 2024-12-20</span>
            </div>
            <div className="flex items-center gap-2 text-[#3fb950]">
              <span>✓</span>
              <span>Thread created: &quot;Deploy staging&quot; assigned to bob</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited Discord servers',
              'Auto thread creation from messages',
              '@mention + due date detection',
              'Dashboard to manage tasks',
              'Email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the bot detect tasks?',
              a: 'It scans messages for @mentions combined with date keywords like "due:", "by", or explicit dates. When both are found, a thread is created automatically.'
            },
            {
              q: 'Do I need to change how my team communicates?',
              a: 'No. The bot works passively in the background. Your team keeps chatting normally — it just picks up on natural task language.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel anytime from your billing portal. No contracts, no questions asked.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Discord Task Thread Manager
      </footer>
    </main>
  )
}
