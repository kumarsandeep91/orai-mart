import { useStyletron } from "styletron-react";
import {  Typography } from "@material-ui/core";
import Link from 'next/link'
import {useTheme } from "@material-ui/core/styles";
export default function navbar() {
    const [css] = useStyletron();
    const theme = useTheme();
    return (
        <Link href="/">
            <a>
            <div className={css({display: "grid",justifyContent: "center",marginTop:'20px'})}>
                <div className={css({display: "grid",gridTemplateColumns: "auto auto",gridTemplateRows: "auto auto",columnGap: "8px",justifyContent: "center",})}>
                <img className={css({height: "50px",gridColumn: "1",gridRow: "1/3",alignSelf: "center",})}src="/images/logo.jpeg"/>
                <Typography className={css({color: theme.palette.secondary.main,fontWeight: "bold",})}variant="h5">Orai Mart
                </Typography>
                <Typography className={css({ color: theme.palette.grey[800] })}variant="body2">
                    Stay Home, Stay Safe
                </Typography>
                </div>
            </div>
            </a>
        </Link>
    )
}
