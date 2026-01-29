import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

// Image generation for Apple touch icon (iOS home screen)
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'linear-gradient(135deg, #171717 0%, #262626 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fafafa',
          fontWeight: 700,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          borderRadius: '22%',
          letterSpacing: '-1px',
          border: '2px solid #525252',
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
