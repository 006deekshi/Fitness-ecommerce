const Footer = () => {
  return (
    <footer className="relative bg-parchment-500 py-20 px-6 border-t border-silver-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">💪</div>
              <span className="text-2xl font-black tracking-tighter text-taupe-500 uppercase">
                IRON<span className="text-powder_blush-500">FORGE</span>
              </span>
            </div>
            <p className="text-grey_olive-500 text-base font-bold leading-relaxed opacity-80">
              Premium fitness gear for elite athletes. Elevate your performance with our curated collection of professional-grade tools.
            </p>
          </div>


          <div className="space-y-6">
            <h3 className="text-xl font-black text-taupe-500 uppercase tracking-widest">
              Join the Forge
            </h3>
            <p className="text-grey_olive-500 text-sm font-bold opacity-70">
              Get exclusive access to new drops and training insights.
            </p>
            <div className="flex group">
              <input
                type="email"
                placeholder="champion@ironforge.com"
                className="flex-1 px-5 py-4 bg-white/50 border-2 border-silver-500/20 rounded-l-2xl text-taupe-500 font-bold placeholder-grey_olive-300 focus:outline-none focus:border-powder_blush-500 transition-all duration-300"
              />
              <button className="px-8 py-4 bg-taupe-500 text-parchment font-black uppercase tracking-widest rounded-r-2xl hover:bg-powder_blush-500 transition-all duration-300 shadow-lg shadow-taupe/10">
                Join
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-black text-taupe-500 uppercase tracking-widest">
              Connect
            </h3>
            <div className="flex flex-wrap gap-4">
              {['Instagram', 'YouTube', 'Twitter', 'TikTok'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="px-4 py-2 flex items-center justify-center rounded-xl bg-white/40 border border-silver-500/20 text-taupe-500 font-black text-xs uppercase tracking-widest hover:bg-taupe-500 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-silver-500/10 text-center">
          <p className="text-grey_olive-500 text-sm font-bold opacity-50 uppercase tracking-[0.2em]">
            © 2026 IronForge. Forge your legacy.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
