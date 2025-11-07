# Social Media Image Guide

## Required Image: /public/images/01.png

### Specifications
- **Dimensions**: 1200 × 630 pixels (16:8.4 aspect ratio)
- **Format**: PNG or JPEG
- **File Size**: Recommended < 300KB, Maximum 8MB
- **Color Mode**: RGB

### Design Recommendations

#### Layout
```
┌─────────────────────────────────────────────┐
│                                             │
│          HAMZA ZEGHARI                      │
│                                             │
│     Full Stack Developer                    │
│                                             │
│  React • TypeScript • Node.js • Nest.js    │
│                                             │
│          hzeghari.dev                       │
│                                             │
└─────────────────────────────────────────────┘
```

#### Color Scheme (Your Brand Colors)
- **Background**: #CCCCC2 (primary-500) or #000000 (black)
- **Text**: Inverse of background
- **Accent**: Use your theme colors

#### Typography
- **Name**: Large, bold (60-72px)
- **Title**: Medium (40-48px)
- **Technologies**: Small (24-32px)
- **Domain**: Medium (32-40px)

### Design Tools Options

#### 1. Canva (Easiest)
1. Go to https://www.canva.com
2. Create custom size: 1200 × 630 px
3. Use template or design from scratch
4. Export as PNG

#### 2. Figma (Professional)
1. Create new file
2. Frame size: 1200 × 630
3. Design your card
4. Export as PNG (2x for retina)

#### 3. Online Tools
- **OG Image Generator**: https://og-playground.vercel.app/
- **Social Image**: https://www.bannerbear.com/
- **Piktochart**: https://piktochart.com/

#### 4. Code-based (Dynamic)
Use Next.js OG Image Generation:

Create `/app/api/og/route.tsx`:
```typescript
import { ImageResponse } from 'next/og';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#CCCCC2',
          color: '#000000',
          fontFamily: 'sans-serif',
        }}
      >
        <h1 style={{ fontSize: 72, fontWeight: 'bold', margin: 0 }}>
          HAMZA ZEGHARI
        </h1>
        <p style={{ fontSize: 48, margin: '20px 0' }}>
          Full Stack Developer
        </p>
        <p style={{ fontSize: 32, margin: '20px 0' }}>
          React • TypeScript • Node.js • Nest.js
        </p>
        <p style={{ fontSize: 40, margin: '40px 0 0 0' }}>
          hzeghari.dev
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
```

### Content to Include

#### Must Have
- ✅ Your name: "Hamza Zeghari"
- ✅ Title: "Full Stack Developer"
- ✅ Domain: "hzeghari.dev"

#### Nice to Have
- Key technologies (3-4 max)
- Location: "Casablanca, Morocco"
- Your photo (optional)
- Logo or personal brand mark

### Testing Your Image

After creating, test it:

1. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Preview how it looks on Twitter/X

2. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Preview Facebook/LinkedIn sharing

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Test LinkedIn preview

### Quick Tips

✅ **DO:**
- Keep text readable and large
- Use high contrast colors
- Test on different devices
- Keep file size reasonable
- Use web-safe fonts
- Center important content

❌ **DON'T:**
- Use too much text
- Use images that are too small
- Forget to test previews
- Use copyrighted images
- Make background too busy
- Use low contrast

### Example Prompt for AI Image Generators

If using DALL-E, Midjourney, or similar:

```
Create a professional social media card (1200x630px) for a developer portfolio.
Minimalist design with clean typography. Background in light beige (#CCCCC2).
Black text. Content: "HAMZA ZEGHARI" in large bold letters, "Full Stack Developer" 
below, technology icons for React, TypeScript, Node.js, and domain "hzeghari.dev" 
at bottom. Modern, professional, tech aesthetic.
```

### Alternative: Screenshot Method

Quick and dirty method:
1. Create a full-screen HTML page with your design
2. Set viewport to 1200×630
3. Take screenshot
4. Crop to exact dimensions
5. Optimize image size

### Image Optimization

Before uploading, optimize:
- **TinyPNG**: https://tinypng.com/
- **ImageOptim**: https://imageoptim.com/
- **Squoosh**: https://squoosh.app/

Target: < 200KB for fast loading

---

**Priority**: Create this image ASAP for proper social media sharing!
**Current Path**: `/public/images/01.png`
**Referenced in**: `app/layout.tsx` metadata
