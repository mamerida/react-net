import { Redirect } from "react-router";

export default function RedirectALanding() {
    return(
        <Redirect to= {{pathname : '/'}}/>
    )
}