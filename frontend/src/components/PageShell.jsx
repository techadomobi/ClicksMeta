const gradients = {
  iris: "from-[#f4f7ff] via-white to-[#fef3ff]",
  mint: "from-[#fef6ff] via-[#f6fbff] to-[#ecfdf5]",
  dusk: "from-[#f2f6ff] via-[#fffaf5] to-[#fef6ff]",
}

export function PageShell({ children, tone = "iris" }) {
  const gradient = gradients[tone] || gradients.iris
  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradient} text-[#050b1d]`}>
      {children}
    </div>
  )
}
