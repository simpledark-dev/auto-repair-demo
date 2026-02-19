import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Garage Henriquez - Auto Repair in Montréal, QC';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #3d0a0a 0%, #1a0808 60%, #2d0a0a 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background accent circles */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(185, 28, 28, 0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(185, 28, 28, 0.1)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
            padding: '0 80px',
            position: 'relative',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(185, 28, 28, 0.2)',
              border: '1px solid rgba(185, 28, 28, 0.4)',
              borderRadius: 40,
              padding: '8px 24px',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#b91c1c',
              }}
            />
            <span style={{ color: '#fca5a5', fontSize: 18, fontWeight: 600 }}>
              Montréal, QC
            </span>
          </div>

          {/* Business Name */}
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Garage Henriquez
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: 26,
              color: 'rgba(255, 255, 255, 0.75)',
              textAlign: 'center',
              lineHeight: 1.4,
              margin: 0,
              maxWidth: 700,
            }}
          >
            Expert Auto Repair & Car Repair Services
          </p>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 3,
              background: '#b91c1c',
              borderRadius: 2,
            }}
          />

          {/* Contact info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 32,
              marginTop: 8,
            }}
          >
            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 18 }}>
              (514) 933-4493
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: 18 }}>
              |
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 18 }}>
              2001 Rue Centre, Montréal, QC
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
