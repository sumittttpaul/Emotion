import * as React from 'react';
import { Button } from "@mui/material";

const LargeButtonBlue: React.FC<{content:string}> = ({content}) => {
    return (
        <Button className="bg-[#0074E4] hover:bg-[#0074E4] text-white h-[60px] w-full text-xs transition-colors">{content}</Button>
    );
}

export default LargeButtonBlue;