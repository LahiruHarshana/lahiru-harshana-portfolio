import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Lahiru Harshana - Full-Stack Software Engineer';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#202020',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background geometric pattern */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        opacity: 0.08,
                    }}
                >
                    <svg width="1200" height="630" viewBox="0 0 1200 630">
                        <line x1="0" y1="0" x2="1200" y2="630" stroke="white" strokeWidth="1" />
                        <line x1="1200" y1="0" x2="0" y2="630" stroke="white" strokeWidth="1" />
                        <line x1="600" y1="0" x2="600" y2="630" stroke="white" strokeWidth="1" />
                        <line x1="0" y1="315" x2="1200" y2="315" stroke="white" strokeWidth="1" />
                        <circle cx="600" cy="315" r="200" stroke="white" strokeWidth="1" fill="none" />
                        <circle cx="600" cy="315" r="280" stroke="white" strokeWidth="1" fill="none" />
                        <rect x="200" y="100" width="800" height="430" stroke="white" strokeWidth="1" fill="none" />
                    </svg>
                </div>

                {/* Top accent line */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #666, white, #666)',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '16px',
                    }}
                >
                    {/* Subtitle */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                        }}
                    >
                        <div
                            style={{
                                width: '40px',
                                height: '1px',
                                backgroundColor: '#888',
                            }}
                        />
                        <span
                            style={{
                                fontSize: '18px',
                                color: '#999',
                                letterSpacing: '6px',
                                textTransform: 'uppercase',
                                fontFamily: 'sans-serif',
                            }}
                        >
                            Portfolio
                        </span>
                        <div
                            style={{
                                width: '40px',
                                height: '1px',
                                backgroundColor: '#888',
                            }}
                        />
                    </div>

                    {/* Name */}
                    <h1
                        style={{
                            fontSize: '72px',
                            fontWeight: 'bold',
                            color: 'white',
                            margin: '0',
                            fontFamily: 'sans-serif',
                            letterSpacing: '-1px',
                        }}
                    >
                        Lahiru Harshana
                    </h1>

                    {/* Title */}
                    <p
                        style={{
                            fontSize: '28px',
                            color: '#aaa',
                            margin: '0',
                            fontFamily: 'sans-serif',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                        }}
                    >
                        Full-Stack Software Engineer
                    </p>

                    {/* Tech stack pills */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '12px',
                            marginTop: '24px',
                        }}
                    >
                        {['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'].map(
                            (tech) => (
                                <span
                                    key={tech}
                                    style={{
                                        padding: '8px 20px',
                                        border: '1px solid #555',
                                        borderRadius: '999px',
                                        color: '#ccc',
                                        fontSize: '14px',
                                        fontFamily: 'sans-serif',
                                        letterSpacing: '1px',
                                    }}
                                >
                                    {tech}
                                </span>
                            )
                        )}
                    </div>
                </div>

                {/* Domain at bottom */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <span
                        style={{
                            fontSize: '16px',
                            color: '#666',
                            fontFamily: 'sans-serif',
                            letterSpacing: '2px',
                        }}
                    >
                        www.lahiruharshana.dev
                    </span>
                </div>

                {/* Bottom accent line */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #666, white, #666)',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
