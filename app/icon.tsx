import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

// Image generation - creates a PNG favicon with MA monogram
// This works alongside icon.svg - Next.js will use the most appropriate format
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: 'linear-gradient(135deg, #171717 0%, #262626 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fafafa',
          fontWeight: 700,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          borderRadius: '50%',
          letterSpacing: '-0.3px',
          border: '0.5px solid #525252',
        }}
      >
        MA
      </div>
    ),
    {
      ...size,
    }
  )
}
