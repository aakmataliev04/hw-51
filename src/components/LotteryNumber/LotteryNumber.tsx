import React from "react";

interface Props  {
   value: number;
}

const LotteryNumber: React.FC<Props> = ({value}) => {
    return (
        <div className={'number'}>
            { value }
        </div>
    );
};

export default LotteryNumber;