import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Numbers() {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.up('md'));
    const tablet = useMediaQuery(theme.breakpoints.up('lg'));

    const containerDivStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '334px',
    }
    const textStyle = {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "21px",
        letterSpacing: "1.5px",
        textAlign: "center",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
        color: "#EB8D15"
    }
    const textStyle2 = {
        fontSize: "32px",
        fontWeight: "700",
        lineHeight: "38.4px",
        letterSpacing: "0.1599999964237213px",
        textAlign: "center",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
        marginTop: "5px",
    }
    const numberStyle = {
        fontSize: "42px",
        fontWeight: 800,
        lineHeight: "63px",
        textAlign: "center",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
        background: "linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    }
    const numberStylePlus = {
        fontSize: "25.2px",
        fontWeight: 800,
        textAlign: "center",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
        background: "linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    }
    const numberHeadingStyle = {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "21px",
        textAlign: "center",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
    }

    return (
        <div style={containerDivStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: "49px" }}>
                <text style={textStyle}>WHY REGISTER KARO</text>
                <text style={textStyle2}>Some Numbers are important</text>
                <div style={{ display: 'flex', flexDirection: mobile ? 'row' : 'column', gap: tablet ? '100px' : '20px', marginTop: '54.39px', marginBottom: '54.39px' }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div><text style={numberStyle}>1M</text><text style={numberStylePlus}>+</text></div>
                        <text style={numberHeadingStyle}>CUSTOMERS</text>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div><text style={numberStyle}>12M</text><text style={numberStylePlus}>+</text></div>
                        <text style={numberHeadingStyle}>CUSTOMERS</text>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div><text style={numberStyle}>41M</text><text style={numberStylePlus}>+</text></div>
                        <text style={numberHeadingStyle}>CUSTOMERS</text>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div><text style={numberStyle}>78M</text><text style={numberStylePlus}>+</text></div>
                        <text style={numberHeadingStyle}>CUSTOMERS</text>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div><text style={numberStyle}>3287M</text><text style={numberStylePlus}>+</text></div>
                        <text style={numberHeadingStyle}>CUSTOMERS</text>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div><text style={numberStyle}>4M</text><text style={numberStylePlus}>+</text></div>
                        <text style={numberHeadingStyle}>CUSTOMERS</text>
                    </div>
                </div>
            </div>
        </div>
    )
}
