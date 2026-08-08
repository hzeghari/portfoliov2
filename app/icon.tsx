import { ImageResponse } from 'next/og';
import { SITE } from './constants/site';

export const contentType = 'image/png';

/** Sizes Chrome looks for when deciding whether the manifest is installable. */
const SIZES = [192, 512];

export function generateImageMetadata() {
  return SIZES.map((size) => ({
    id: String(size),
    size: { width: size, height: size },
    contentType,
  }));
}

export default async function Icon({ id }: { id: Promise<string> }) {
  const size = Number(await id);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: SITE.themeColorDark,
          color: SITE.themeColorLight,
          fontSize: size * 0.48,
          fontWeight: 700,
          letterSpacing: '-0.04em',
        }}
      >
        HZ
      </div>
    ),
    { width: size, height: size },
  );
}
