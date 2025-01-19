import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './Search.css'

export default function Search() {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.up('md'));

    const containerDiv = {
        minHeight: "330px",
        background: "linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)"
    }
    const searchDiv = {
        paddingTop: "64px",
        paddingLeft: "112px",
        paddingRight: "112px",
        paddingBottom: "64px",
        gap: "32px",
        opacity: "0px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        color: "#FFFFFF"
    }
    const textStyle = {
        fontFamily: "Inter",
        lineHeight: "20px",
        letterSpacing: "-0.10000000149011612px",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
    }
    const text2Style = {
        fontFamily: "Inter",
        lineHeight: "40px",
        letterSpacing: "-0.015em",
        textAlign: "center",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
    }
    return (
        <div style={containerDiv}>
            <div style={searchDiv}>
                <text style={{
                    textStyle, fontSize: "14px",
                    fontWeight: "600",
                }}>
                    1% OF THE INDUSTRY
                </text>
                <text style={{ text2Style, fontSize: "32px", fontWeight: "700" }}>
                    Welcome to your new digital reality. Now.
                </text>
                <div style={{ display: "flex", flexDirection: "row", maxWidth: "512px", width: "100%", background: "#FFFFFF", borderRadius: "6px", }}>
                    <input style={{ maxWidth: "420px", width: "100%", borderRadius: "6px 0px 0px 6px", padding: "12px 16px 12px 16px" }} placeholder='Enter you email' >
                    </input>
                    <button style={{ height: "46px", maxWidth: "120px", width: "100%", borderRadius: "0px 6px 6px 0px", background: "#FFA229", color: "#FFFFFF", }}>Submit</button>
                </div>
                <div style={{
                    width: "Hug(641px)px",
                    height: "Hug(24px)px",
                    gap: "24px",
                    display: "flex",
                    flexDirection: mobile ? "row" : "column",
                }}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "16px", alignItems: "center", justifyContent: "center" }}>
                        <input type="checkbox" className="circle-checkbox" />
                        <text>Instant results</text>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", gap: "16px", alignItems: "center", justifyContent: "center" }}>
                        <input type="checkbox" className="circle-checkbox" />
                        <text>User-friendly interface</text>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", gap: "16px", alignItems: "center", justifyContent: "center" }}>
                        <input type="checkbox" className="circle-checkbox" />
                        <text>Personalized customization</text>
                    </div>
                </div>
            </div>
        </div>
    )
}
