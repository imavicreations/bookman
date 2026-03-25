export default function Page() {
  return (
    <div style={{ width: '100dvw', height: '100dvh', margin: 0, padding: 0 }}>
      <iframe 
        src="/index.html" 
        allowFullScreen
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} 
        title="Block Man Game"
      />
    </div>
  )
}
