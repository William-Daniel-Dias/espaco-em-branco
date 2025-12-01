export const Logo = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 400"
        width={150}
        height={75}
        {...props}
    >
        <defs>
            <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                    offset="0%"
                    style={{
                        stopColor: "#004a7f",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset="100%"
                    style={{
                        stopColor: "#06a",
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>
            <linearGradient id="b" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                    offset="0%"
                    style={{
                        stopColor: "#ff8c42",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset="100%"
                    style={{
                        stopColor: "#ff6b1a",
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>
        </defs>
        <g transform="translate(80 100)">
            <path d="M0 0h165v20H20v160h100v20H0Z" fill="url(#a)" />
            <path
                d="M30 60q30 20 70 0t50 40"
                stroke="url(#b)"
                strokeWidth={7}
                fill="none"
                strokeLinecap="round"
            />
            <circle cx={45} cy={100} r={7} fill="#1965fd" opacity={1.5} />
            <circle cx={105} cy={110} r={7} fill="#03a66a" opacity={1.5} />
            <circle cx={60} cy={150} r={7} fill="#902ef2" opacity={1.5} />
        </g>
        <text
            x={240}
            y={180}
            fontFamily="Poppins, Montserrat, sans-serif"
            fontSize={68}
            fontWeight={700}
            fill="#004a7f"
        >
            {"ESPA\xC7O"}
        </text>
        <text
            x={240}
            y={250}
            fontFamily="Poppins, Montserrat, sans-serif"
            fontSize={68}
            fontWeight={700}
            fill="none"
            stroke="#ff8c42"
            strokeWidth={2}
        >
            {"EM BRANCO"}
        </text>
    </svg>
);