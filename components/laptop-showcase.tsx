export function LaptopShowcase() {
  return (
    <div className="laptop-stage relative w-full max-w-[680px]" aria-hidden="true">
      {/* Ambient glow — very subtle, tight radius, low opacity */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(56,189,248,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="laptop-3d relative">
        <img
          src="/product-laptop.png"
          alt=""
          width={498}
          height={358}
          className="relative block w-full h-auto"
          draggable={false}
        />
      </div>

      {/* Contact shadow */}
      <div
        className="pointer-events-none mx-auto mt-4 h-3 w-[75%] rounded-[50%] blur-lg"
        style={{ background: "radial-gradient(ellipse, rgba(0,0,0,0.55), transparent 70%)" }}
      />
    </div>
  )
}
