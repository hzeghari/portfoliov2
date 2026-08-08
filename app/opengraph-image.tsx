import { ImageResponse } from 'next/og';
import { SOCIAL_INFOS } from './constants/infos';
import { SITE } from './constants/site';

export const alt = `${SOCIAL_INFOS.fullname} - ${SITE.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const STACK = ['React', 'TypeScript', 'Node.js', 'Nest.js', 'Next.js'];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: SITE.themeColorLight,
          color: '#000000',
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, letterSpacing: '0.28em' }}>
          {SITE.url.replace(/^https?:\/\//, '').toUpperCase()}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 88, fontWeight: 700 }}>
            {SOCIAL_INFOS.fullname}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 52,
              marginTop: 8,
              color: '#5F5F4F',
            }}
          >
            {SITE.jobTitle}
          </div>
          <div style={{ display: 'flex', fontSize: 32, marginTop: 28 }}>
            {`${SITE.locality}, ${SITE.countryName}`}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          {STACK.map((tech) => (
            <div
              key={tech}
              style={{
                display: 'flex',
                fontSize: 26,
                padding: '10px 22px',
                borderRadius: 999,
                border: '2px solid #7D7D69',
                color: '#5F5F4F',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
