import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.up('md'));
    const tablet = useMediaQuery(theme.breakpoints.up('lg'));

    const containerStyle = {
        width: "100%",
        minHeight: "531px",
        backgroundColor: "#1C4670",
        display: "flex",
        flexDirection: tablet ? "row" : "column",
    }
    const imgUrl = "https://s3-alpha-sig.figma.com/img/a62c/2d74/6f4256f5f8a9ed25e6891d1db44e4512?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WGTjDr~wBGcsMj8cthh9E2Uh8GbV8OfPO03mJOj9YZfeOOsXjbnrRokUBvXtDK6-s6zy72DvvpA0S3eqqoab4IKG930gfeMqM5PBZuy576igUz5LyC4xwMaXGHiU1eC~AfLG-peaF86a0ZOxmAXiE069H1XkUAtaeRuh-DiCQ0isqExQf1Z4MlSTTftfZgVerhQ3-TzqIX4p9yqHOPudaZmiIrTxtJ5vblFi2vpNYn3De-wHVppgijnYeRxOn9BfrsA1MSmPtLshyzxkV35pQpdOl~Bo6puEJoTg~4GhGnJRgn88pLNkO~SJA9kzKyb8lcMfHPkuUSV0-Hg92cn4xg";
    return (
        <div style={containerStyle}>
            <div style={{ width: tablet ? "50%" : "100%" }}>
                <div style={{ maxWidth: "572px", marginTop: "72px", marginLeft: "70px", marginBottom: tablet ? "72px" : "0px", gap: "48px", display: "flex", flexDirection: "column" }}>
                    <text style={{
                        fontSize: "34px",
                        fontWeight: 700,
                        lineHeight: "40px",
                        letterSpacing: "-0.015em",
                        textAlign: "left",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                        color: "#FFFFFF"
                    }}>Our Video Introductions</text>
                    <text style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        letterSpacing: "-0.01em",
                        textAlign: "left",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                        color: "#AAB5CD"
                    }}>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</text>
                    <div style={{ display: "flex", flexDirection: "row", gap: "16px", }}>
                        <div style={{
                            width: "56px",
                            height: "56px",
                            padding: "12px var(--MainSystem12px) 0px var(--MainSystem12px)",
                            gap: "0px",
                            borderRadius: "50%",
                            opacity: "0px",
                            backgroundColor: "#FFA229"
                        }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <text style={{
                                fontSize: "22px",
                                fontWeight: 700,
                                lineHeight: "30px",
                                letterSpacing: "-0.01em",
                                textAlign: "left",
                                textUnderlinePosition: "from-font",
                                textDecorationSkipInk: "none",
                                color: "#ffffff"
                            }}>
                                Explore ideas together
                            </text>
                            <text style={{
                                fontSize: "16px",
                                fontWeight: 400,
                                lineHeight: "24px",
                                letterSpacing: "-0.01em",
                                textAlign: "left",
                                textUnderlinePosition: "from-font",
                                textDecorationSkipInk: "none",
                                color: "#AAB5CD"
                            }}>Engage audience segments and finally create actionable insights. Amplify vertical integration.</text>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", gap: "16px", }}>
                        <div style={{
                            width: "56px",
                            height: "56px",
                            padding: "12px var(--MainSystem12px) 0px var(--MainSystem12px)",
                            gap: "0px",
                            borderRadius: "50%",
                            opacity: "0px",
                            backgroundColor: "#FFA229"
                        }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <text style={{
                                fontSize: "22px",
                                fontWeight: 700,
                                lineHeight: "30px",
                                letterSpacing: "-0.01em",
                                textAlign: "left",
                                textUnderlinePosition: "from-font",
                                textDecorationSkipInk: "none",
                                color: "#ffffff"
                            }}>
                                Bring those ideas to life
                            </text>
                            <text style={{
                                fontSize: "16px",
                                fontWeight: 400,
                                lineHeight: "24px",
                                letterSpacing: "-0.01em",
                                textAlign: "left",
                                textUnderlinePosition: "from-font",
                                textDecorationSkipInk: "none",
                                color: "#AAB5CD"
                            }}>Engage audience segments and finally create actionable insights. Amplify vertical integration.</text>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: tablet ? "50%" : "100%" }}>
                <div style={{ position: 'relative', maxWidth: '100%', height: '420px', marginTop: "72px", marginBottom: "72px", marginRight: "70px", marginLeft: "70px" }}>
                    <img
                        src={imgUrl}
                        alt="MainImage"
                        style={{ width: '100%', height: '100%' }}
                    />
                    <img
                        src="https://s3-alpha-sig.figma.com/img/303c/2a2d/9a4d3ad1e29de4390d85015b86332762?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S9h5gdrm2JS0fyElMhELFK4qdFCpX3ph2HmC3gVC0oTd6Xra2~9FOENZugabPuBTtP91A7D7Pouk6uLRDpu6XItC7fp7TiwxHroG9EHw4yWbbWgA~FfxCzcSZalS5wjejv~7XMzCiRPmWig8QKGZQ0aKwAafNlBRtlJYwuU4-930EumsvA7zEPsP-aqMG8jXinp4heEYzYzVdK5WVzGxifU5hKQvvNUDlAEdpTieI7E16TVI~2NytJmlIH0tY~wWZUl6HG2tQg6CARfcdrUUppE7~HKaJEQw0cViLS1D3h2LTs7GRm3020x5oUuVRayoCWwg6D6dzkq0OIyUGRPSqA__"
                        alt="OverlayImage"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            maWidth: '154px',
                            maxHeight: '122px'
                        }}
                    />
                </div>
            </div>
        </div >
    )
}
